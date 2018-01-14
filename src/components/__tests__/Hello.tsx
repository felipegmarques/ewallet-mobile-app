import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { Text } from 'react-native';
import Hello from '../Hello';

configure({ adapter: new Adapter() });

it('renders correctly with defaults', () => {
    const hello = shallow(<Hello name='World' />);
    expect(hello.find(Text).render().text()).toEqual('Hello World!');
});
