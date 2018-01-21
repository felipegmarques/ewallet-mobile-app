import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import 'jest';
import * as React from 'react';
import { Body, H1, Label, Money } from '../Typography';

configure({ adapter: new Adapter() });

describe('render typographic elements with expected behaviour', () => {
  it('renders children correctly', () => {
    const header1 = shallow(<H1>Header1</H1>);
    const label = shallow(<Label>Label</Label>);
    const body = shallow(<Body>Body</Body>);
    const money = shallow(<Money>Money</Money>);

    expect(header1.props().children).toBe('Header1');
    expect(label.props().children).toBe('Label');
    expect(body.props().children).toBe('Body');
    expect(money.props().children).toBe('Money');
  });

  it('should allow to configure click', () => {
    const onPress = jest.fn();
    const header1 = shallow(<H1 onPress={onPress} >Header1</H1>);

    header1.simulate('press');
    expect(onPress).toBeCalled();
  });
});
