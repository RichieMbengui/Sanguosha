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

   const listVert = {
        file : fileVert,
        name: "Cartes du Royaume vert 吴将",
        description : "Shu, fondé et dirigé par Liu Bei et plus tard réussi par Liu Shan, est l'équivalent le plus proche des les bons. Leur motif se concentre uniquement sur la création d'un royaume pour les gens, l'un de la vraie paix et, bien sûr, la bienveillance et la vertu. Ses dirigeants ont tous différents niveaux d' honneur avant que la raison et surtout, ils sont tous incroyablement dévoué pas seulement à Liu Bei, mais plus précisément, sa cause de . Shu est également remarquable pour être le dernier des royaumes à être formellement fondé comme pour beaucoup des exploits antérieurs de Liu Bei, lui et ses forces n'avaient aucune base d'opérations et ont passé une grande partie de ce temps à parcourir la campagne chinoise en aidant où il pouvait. Il est intéressant de noter que la plupart de ses plus beaux hommes utilisent une sorte de poteau."
    };

    const listNoir = {
        file : fileNoir,
        name: "Cartes du Royaume noir 群雄",
        description : "Shu, fondé et dirigé par Liu Bei et plus tard réussi par Liu Shan, est l'équivalent le plus proche des les bons.. Leur motif se concentre uniquement sur la création d'un royaume pour les gens, l'un de la vraie paix et, bien sûr, la bienveillance et la vertu. Ses dirigeants ont tous différents niveaux d' honneur avant que la raison et surtout, ils sont tous incroyablement dévoué pas seulement à Liu Bei, mais plus précisément, sa cause de . Shu est également remarquable pour être le dernier des royaumes à être formellement fondé comme pour beaucoup des exploits antérieurs de Liu Bei, lui et ses forces n'avaient aucune base d'opérations et ont passé une grande partie de ce temps à parcourir la campagne chinoise en aidant où il pouvait. Il est intéressant de noter que la plupart de ses plus beaux hommes utilisent une sorte de poteau."
    };

   const listRouge = {
        file : fileRouge,
        name: "Cartes du Royaume rouge 蜀将",
        description : "Shu, fondé et dirigé par Liu Bei et plus tard réussi par Liu Shan, est l'équivalent le plus proche des les bons. Leur motif se concentre uniquement sur la création d'un royaume pour les gens, l'un de la vraie paix et, bien sûr, la bienveillance et la vertu. Ses dirigeants ont tous différents niveaux d' honneur avant que la raison et surtout, ils sont tous incroyablement dévoué pas seulement à Liu Bei, mais plus précisément, sa cause de . Shu est également remarquable pour être le dernier des royaumes à être formellement fondé comme pour beaucoup des exploits antérieurs de Liu Bei, lui et ses forces n'avaient aucune base d'opérations et ont passé une grande partie de ce temps à parcourir la campagne chinoise en aidant où il pouvait. Il est intéressant de noter que la plupart de ses plus beaux hommes utilisent une sorte de poteau."
    };

    const listBleu = {
        file : fileBleu,
        name: "Cartes du Royaume bleu 魏将",
        description : "Shu, fondé et dirigé par Liu Bei et plus tard réussi par Liu Shan, est l'équivalent le plus prochedes les bons. Leur motif se concentre uniquement sur la création d'un royaume pour les gens, l'un de la vraie paix et, bien sûr, la bienveillance et la vertu. Ses dirigeants ont tous différents niveaux d' honneur avant que la raison et surtout, ils sont tous incroyablement dévoué pas seulement à Liu Bei, mais plus précisément, sa cause de . Shu est également remarquable pour être le dernier des royaumes à être formellement fondé comme pour beaucoup des exploits antérieurs de Liu Bei, lui et ses forces n'avaient aucune base d'opérations et ont passé une grande partie de ce temps à parcourir la campagne chinoise en aidant où il pouvait. Il est intéressant de noter que la plupart de ses plus beaux hommes utilisent une sorte de poteau."
    };


      return (
        <View style={styles.container}>

            <Text style={{fontSize: 20}} > Les Cartes Personnages </Text>
             <TouchableNativeFeedback
                   onPress={() => navigate('Chat',listVert)}
                background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Royaume vert 吴将</Text>
              </View>
            </TouchableNativeFeedback>

             <TouchableNativeFeedback
                   onPress={() => navigate('Chat',listRouge)}
                background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Royaume rouge 蜀将</Text>
              </View>
            </TouchableNativeFeedback>

             <TouchableNativeFeedback
                   onPress={() => navigate('Chat',listNoir)}
                background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Royaume noir 群雄</Text>
              </View>
            </TouchableNativeFeedback>

             <TouchableNativeFeedback
                   onPress={() => navigate('Chat',listBleu)}
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
      alignSelf: 'stretch',
      justifyContent: 'center',
    },



});