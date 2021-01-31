/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '../../../src/screens/home/home';
import App from '../../../src/lib/app';

import renderer from 'react-test-renderer';

beforeEach(() => {
  App.bootMocked();
});

it('renders correctly', () => {
  App.api.get = jest.fn().mockImplementation(() => Promise.reject('fail'));

  const tree = renderer.create(
    <Home
      navigation={{
        setOptions: () => {},
      }}
      route={{}}
    />,
  );
  expect(tree).toMatchSnapshot();
});

it('renders correctly with data from service', async () => {
  App.api.get = jest.fn().mockImplementation(() =>
    Promise.resolve({
      id: 1,
    }),
  );

  const tree = renderer.create(
    <Home
      navigation={{
        setOptions: () => {},
      }}
      route={{}}
    />,
  );
  expect(tree).toMatchSnapshot();
});
