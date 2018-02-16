import * as ts from 'typescript';
import * as Lint from 'tslint';

enum ImportType {
  Absolute = 0, // 'some/folder/file'
  Relative = 1, // './siblingFolder'
}

export class Rule extends Lint.Rules.AbstractRule {
    public static FAILURE_STRING = 'absolute imports should come first than relative';

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new NoImportsWalker(sourceFile, this.getOptions()));
    }
}

// The walker takes care of all the work.
class NoImportsWalker extends Lint.RuleWalker {
    private previousType: ImportType = ImportType.Absolute;

    public visitImportDeclaration(node: ts.ImportDeclaration) {
        const { moduleSpecifier } = node;
        const currentyType = this.getImportType(moduleSpecifier.getText());
        // create a failure at the current position
        if (currentyType === ImportType.Absolute
            && this.previousType === ImportType.Relative) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
        }
        this.previousType = currentyType;
        // call the base version of this visitor to actually parse this node
        super.visitImportDeclaration(node);
    }

    private getImportType(path: string): ImportType {
        return path.substr(1, 2) === './' ? ImportType.Relative : ImportType.Absolute;
    }
}
