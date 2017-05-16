/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { View,Button, Text, Navigator, StyleSheet, TouchableNativeFeedback } from 'react-native';
import fileBleu from './src/data/json/bleu.json';
import fileNoir from './src/data/json/noir.json';
import fileRouge from './src/data/json/rouge.json';
import fileVert from './src/data/json/vert.json';

export default class CartePerso extends Component {
  render() {
   const { navigate } = this.props.navigation;

      return (
        <View style={styles.container}>

            <Text style={{fontSize: 20}} > Les Cartes Personnages </Text>
             <TouchableNativeFeedback
                   onPress={() => navigate('Chat',{file:fileVert, name:"Cartes du Royaume vert 吴将"})}
                background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Royaume vert 吴将</Text>
              </View>
            </TouchableNativeFeedback>

             <TouchableNativeFeedback
                   onPress={() => navigate('Chat',{file:fileRouge, name:"Cartes du Royaume rouge 蜀将"})}
                background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Royaume rouge 蜀将</Text>
              </View>
            </TouchableNativeFeedback>

             <TouchableNativeFeedback
                   onPress={() => navigate('Chat',{file:fileNoir, name:"Cartes du Royaume noir 群雄"})}
                background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Royaume noir 群雄</Text>
              </View>
            </TouchableNativeFeedback>

             <TouchableNativeFeedback
                   onPress={() => navigate('Chat',{file:fileBleu, name:"Cartes du Royaume bleu 魏将"})}
                background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Royaume bleu 魏将</Text>
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