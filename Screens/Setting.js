import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Setting extends Component {
    static navigationOptions =
 {
    title: 'MainActivity',
 };
  render() {
    return (
      <View>
        
        <Text>This is the first screen</Text>
        <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Home"/>
      </View>
    )
  }
};

export default Setting;