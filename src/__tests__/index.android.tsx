import 'react-native';
import * as React from 'react';
import MyAwesomeProject from '../index.android';

// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <MyAwesomeProject />
  );
});
