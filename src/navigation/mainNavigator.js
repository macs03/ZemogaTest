import * as React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../themes/colors';

import Home from '../screens/home/home';
import Post from '../screens/post/post';

import Refresh from '../components/refresh/refresh';
import Favorite from '../components/favorite/favorite';

enableScreens();

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: colors.mainGreen,
  },
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTransparent: true, title: ''}}
      />
    </Stack.Navigator>
  );
};

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Main"
          component={MainStackNavigator}
          options={{
            title: 'Posts',
            headerLeft: null,
            headerRight: () => <Refresh onRefresh={() => {}} />,
            ...headerOptions,
          }}
        />
        <RootStack.Screen
          name="Post"
          component={Post}
          options={{
            title: 'Post',
            headerRight: () => <Favorite onMarkAsFavorite={() => {}} />,
            ...headerOptions,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;
