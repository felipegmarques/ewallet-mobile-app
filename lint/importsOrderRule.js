"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Lint = require("tslint");
var ImportType;
(function (ImportType) {
    ImportType[ImportType["Absolute"] = 0] = "Absolute";
    ImportType[ImportType["Relative"] = 1] = "Relative";
})(ImportType || (ImportType = {}));
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new NoImportsWalker(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING = 'absolute imports should come first than relative';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
// The walker takes care of all the work.
var NoImportsWalker = /** @class */ (function (_super) {
    __extends(NoImportsWalker, _super);
    function NoImportsWalker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.previousType = ImportType.Absolute;
        return _this;
    }
    NoImportsWalker.prototype.visitImportDeclaration = function (node) {
        var moduleSpecifier = node.moduleSpecifier;
        var currentyType = this.getImportType(moduleSpecifier.getText());
        // create a failure at the current position
        if (currentyType === ImportType.Absolute
            && this.previousType === ImportType.Relative) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
        }
        this.previousType = currentyType;
        // call the base version of this visitor to actually parse this node
        _super.prototype.visitImportDeclaration.call(this, node);
    };
    NoImportsWalker.prototype.getImportType = function (path) {
        return path.substr(1, 2) === './' ? ImportType.Relative : ImportType.Absolute;
    };
    return NoImportsWalker;
}(Lint.RuleWalker));
