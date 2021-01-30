import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import Home from '../screens/home/home';
import Post from '../screens/post/post';

enableScreens();

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

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
          options={{headerTransparent: true, title: 'Posts', headerLeft: null}}
        />
        <RootStack.Screen
          name="Post"
          component={Post}
          options={{headerTransparent: true, title: 'Post'}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;
