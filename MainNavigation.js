import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './vistas/LoginScreen';
const screens = {
    LoginScreen: {
      screen: LoginScreen
    }
    
  }
  
  const config = {
    headerMode: 'none',
    initialRouteName: 'LoginScreen'
  }
  const RootStack = createStackNavigator(screens,config);
  export default createAppContainer(RootStack);
  