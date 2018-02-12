import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import 'jest';
import * as React from 'react';
import { TextInput } from 'react-native';
import { FormControl } from '../Form';
configure({ adapter: new Adapter() });

describe('render form control', () => {
  it('change state on focus', () => {
    const formControl = shallow(<FormControl placeholder='' label=''>Header1</FormControl>);
    const input = formControl.find(TextInput);

    input.simulate('focus');
    expect(formControl.state()).toMatchObject({ focus: true });

    input.simulate('blur');
    expect(formControl.state()).toMatchObject({ focus: false });
  });

});
