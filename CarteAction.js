/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { View,Button, Text, Navigator, StyleSheet, TouchableNativeFeedback } from 'react-native';

import fileChevaux from './src/data/json/chevaux.json';
import fileMagiques from './src/data/json/magiques.json';
import fileArmes from './src/data/json/armes.json';
import fileArmures from './src/data/json/armures.json';
import fileBasiques from './src/data/json/basiques.json';

export default class CarteAction extends Component {
  render() {
   const { navigate } = this.props.navigation;

      return (
        <View style={styles.container}>

            <Text style={{fontSize: 20}} > Les Cartes Actions </Text>

             <TouchableNativeFeedback
                   onPress={() => navigate('Chat',{file:fileChevaux, name:"Cartes chevaux 马"})}
                background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Cartes chevaux 马</Text>
              </View>
            </TouchableNativeFeedback>

             <TouchableNativeFeedback
                   onPress={() => navigate('Chat',{file:fileMagiques, name:"Cartes magiques 锦囊牌"})}
                background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Cartes magiques 锦囊牌</Text>
              </View>
            </TouchableNativeFeedback>

             <TouchableNativeFeedback
                   onPress={() => navigate('Chat',{file:fileBasiques, name:"Cartes basiques 基本牌"})}
                background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Cartes basiques 基本牌</Text>
              </View>
            </TouchableNativeFeedback>

             <TouchableNativeFeedback
                   onPress={() => navigate('Chat',{file:fileArmes, name:"Cartes armes 武器"})}
                background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Cartes armes 武器</Text>
              </View>
            </TouchableNativeFeedback>

             <TouchableNativeFeedback
                   onPress={() => navigate('Chat',{file:fileArmures, name:"Cartes armures 防具"})}
                background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Cartes armures 防具</Text>
              </View>
            </TouchableNativeFeedback>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  textButton: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color:'#007aff',
    backgroundColor: 'transparent',
  },

  button: {
    height: 44,
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    borderColor:'#007aff',
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
