import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar, View, StyleSheet} from 'react-native';

import app from './lib/app';
import Splash from './screens/splash/splash';
import MainNavigator from './navigation/mainNavigator';

const App = () => {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    app.boot().then(() => {
      SplashScreen.hide();
      setIsBooting(false);
    });
  }, []);

  if (isBooting) {
    return <Splash />;
  }

  return (
    <>
      <View style={styles.content}>
        <StatusBar barStyle="light-content" />
        <MainNavigator />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {height: '100%'},
});

export default App;
