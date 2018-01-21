import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import 'jest';
import * as React from 'react';
import { H1 } from '../Typography';

configure({ adapter: new Adapter() });

describe('render typographic elements with expected behaviour', () => {
  it('renders children correctly', () => {
    const header1 = shallow(<H1>Header1</H1>);
    expect(header1.props().children).toBe('Header1');
  });

  it('should allow to configure click', () => {
    const onPress = jest.fn();
    const header1 = shallow(<H1 onPress={onPress} >Header1</H1>);

    header1.simulate('press');
    expect(onPress).toBeCalled();
  });
});
