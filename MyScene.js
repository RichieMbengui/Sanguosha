/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { View,Button, Text, Navigator, StyleSheet, TouchableNativeFeedback } from 'react-native';
import fileVert from './src/data/json/vert.json';


export default class MyScene extends Component {
  render() {
   const { navigate } = this.props.navigation;

      return (
        <View style={styles.container}>

            <Text style={{fontSize: 20}} > Les Cartes Personnages </Text>

             <TouchableNativeFeedback
               // onPress={() => navigate('CarteAction', { name: 'Jane' });}
                   onPress={() => navigate('All')}
                background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Royaume vert</Text>
              </View>
            </TouchableNativeFeedback>

             <TouchableNativeFeedback
               // onPress={() => navigate('CarteAction', { name: 'Jane' });}
                   onPress={() => navigate('All')}
                background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Royaume rouge</Text>
              </View>
            </TouchableNativeFeedback>

             <TouchableNativeFeedback
               // onPress={() => navigate('CarteAction', { name: 'Jane' });}
                   onPress={() => navigate('All')}
                background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Royaume noir</Text>
              </View>
            </TouchableNativeFeedback>

             <TouchableNativeFeedback
               // onPress={() => navigate('CarteAction', { name: 'Jane' });}
                   onPress={() => navigate('All')}
                background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Royaume bleu</Text>
              </View>
            </TouchableNativeFeedback>

        <Button
          onPress={() => navigate('Chat',{name:fileVert})}
          title="Test"
        />

        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  textButton: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },

  button: {
    height: 44,
    //width: 500,
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
