/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MainScreenNavigator from './MainScreenNavigator';
import ListCartes from './ListCartes';
import Test from './Test';
import ViewCartes from './ViewCartes';

import { TabNavigator, StackNavigator } from 'react-navigation';


MainScreenNavigator.navigationOptions = {
  title: 'Sanguosha',
};

class ChatScreen extends React.Component {
  render() {
  const { params } = this.props.navigation.state;
    return <Text>List of recent chats  </Text>
  }
}

const Sanguosha = StackNavigator({
    Home: { screen: MainScreenNavigator },
    Chat: { screen: ListCartes },
    All: { screen: ViewCartes },
});

AppRegistry.registerComponent('Sanguosha', () => Sanguosha);
    