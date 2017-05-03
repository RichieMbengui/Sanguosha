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

import { TabNavigator } from "react-navigation";
import MyScene from './MyScene';
import CarteAction from './CarteAction';
import Home from './Home';
import CartePerso from './CartePerso';
import Contact from './Contact';


Home.navigationOptions = {
  title: 'Home',
};

CarteAction.navigationOptions = {
  title: 'Cartes Actions',
};

CartePerso.navigationOptions = {
  title: 'Cartes Personnages',
};

Contact.navigationOptions = {
  title: 'Contact',
};

const MainScreenNavigator = TabNavigator({
    Home: { screen: Home },
    CarteAction :{screen : CarteAction},
    CartePerso: { screen: CartePerso },
    Infos: { screen: Contact },
});

export default MainScreenNavigator;