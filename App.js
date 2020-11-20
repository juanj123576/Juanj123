/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationsScreen from './NotificationsScreen';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Main from './Main';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{
      headerStyle: {
        backgroundColor: '#6646ee',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontSize: 22,
      },
    }} >
      <Stack.Screen name="Home" component={HomeScreen} 
      options={({ navigation }) => ({
        headerRight: () => (
          <Icon
          name="plus"
          size={20}
            onPress={() => navigation.navigate('AddRoom')}
          />
        ),
      })}
      />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Main" component={Main}/>
     
     
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}