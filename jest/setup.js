/* eslint-disable */
import * as ReactNative from 'react-native';
import * as UI from 'react-native-ui-lib';

jest.doMock('react-native', () => {
  // Extend ReactNative
  return Object.setPrototypeOf(
    {
      // Redefine an export, like a component
      Linking: {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        openURL: jest.fn(),
        canOpenURL: jest.fn(),
        getInitialURL: jest.fn(),
      },
      Animated: {
        ...ReactNative.Animated,
        timing: (value, config) => ({
          start: (callback) => callback && callback({finished: true}),
          reset: (callback) => callback && callback(),
          stop: (callback) => callback && callback(),
        }),
        spring: (value, config) => ({
          start: (callback) => callback && callback({finished: true}),
          reset: (callback) => callback && callback(),
          stop: (callback) => callback && callback(),
        }),
        sequence: (animations) => ({
          start: (callback) => callback && callback({finished: true}),
          reset: (callback) => callback && callback(),
          stop: (callback) => callback && callback(),
        }),
        parallel: (animations) => ({
          start: (callback) => callback && callback({finished: true}),
          reset: (callback) => callback && callback(),
          stop: (callback) => callback && callback(),
        }),
        stagger: (animations) => ({
          start: (callback) => callback && callback({finished: true}),
          reset: (callback) => callback && callback(),
          stop: (callback) => callback && callback(),
        }),
        loop: (animation) => ({
          start: jest.fn(),
        }),
      },
    },
    ReactNative,
  );
});

jest.mock('react-native-gesture-handler', () => {
  const React = require('react');
  return {
    FlingGestureHandler: (props) =>
      React.createElement('FlingGestureHandler', props, props.children),
    TapGestureHandler: (props) =>
      React.createElement('TapGestureHandler', props, props.children),
    LongPressGestureHandler: (props) =>
      React.createElement('LongPressGestureHandler', props, props.children),
    Swipeable: (props) =>
      React.createElement('Swipeable', props, props.children),
    RectButton: (props) =>
      React.createElement('RectButton', props, props.children),
    Directions: {
      RIGHT: 1,
      LEFT: 2,
    },
    State: {
      ACTIVE: 4,
    },
    openRight: () => {},
  };
});

// jest.mock('../src/lib/app');

jest.mock('@react-navigation/stack', () => {
  return {createStackNavigator: () => {}};
});

jest.doMock('react-native-ui-lib', () => {
  const React = require('react');

  return Object.setPrototypeOf(
    {
      Assets: {
        loadAssetsGroup: () => {
          return {
            refresh: require('../src/assets/icons/refresh.png'),
            favorite: require('../src/assets/icons/star.png'),
            trash: require('../src/assets/icons/delete.png'),
            chevron: require('../src/assets/icons/chevronRight.png'),
          };
        },
        icons: {
          refresh: require('../src/assets/icons/refresh.png'),
          favorite: require('../src/assets/icons/star.png'),
          trash: require('../src/assets/icons/delete.png'),
          chevron: require('../src/assets/icons/chevronRight.png'),
        },
      },
      ListItem: (props) =>
        React.createElement('ListItem', props, props.children),
      Drawer: (props) => React.createElement('Drawer', props, props.children),
    },
    UI,
  );
});
