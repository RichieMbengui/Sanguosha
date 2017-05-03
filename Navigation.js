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

import MyScene from './MyScene';
import CarteAction from './CarteAction';
import Home from './Home';
import { TabNavigator } from 'react-navigation';

class AllContactsScreen extends React.Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}
const Navigation = TabNavigator({
  Home: { screen: Home },
  All: { screen: AllContactsScreen },
  MyScene: { screen: MyScene },
  CarteAction :{screen : CarteAction}
});
Navigation.navigationOptions = {
  title: 'My Chats',
};

//module.exports = new MyScene;