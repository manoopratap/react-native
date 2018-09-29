import React from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Setting from './Screens/Setting';
import Home from './Screens/Home';


const AppNavigator = createStackNavigator({
  SettingScreen: { screen: Setting },
  HomeScreen: { screen: Home }
});


export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}