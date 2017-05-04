/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { View, Text,StyleSheet, Navigator } from 'react-native';

export default class Home extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }
render() {
const {state} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Sanguosha {'\n'}
            Un autre univers, une autre vision des jeux de cartes
            </Text>
            <Text style={styles.instructions}>
            Sanguosha est un jeu au tour par tour où chaque joueur joue dans l'ordre dans lequel ils sont assis
            à la table. Cela ne signifie pas que vous pouvez rien faire si ce n'est pas votre tour.
            De nombreuses intéractions ont lieu pendant les tours des autres joueurs.
              Cela vous donne la chance d'aider ou interférer avec le jeu.
        </Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});