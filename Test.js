/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class ViewCartes extends Component {
    cartes = {};
    constructor() {
        super();
        this.cartes = {};
    }

  render() {
        const { params } = this.props.navigation.state;
        this.cartes = params.cartes;

        return (
            <View >
                <View  style={styles.titre} >
                    <Text style={styles.titreCarte}>  { this.cartes.nomComplet} </Text>
                </View>

               <View >
                <Image source={{ uri: sthis.cartes.image}}  style={styles.image} />
                </View>
                <View style={styles.caption}>
                    <Text style={styles.captionText}>  {  this.cartes.nomComplet} </Text>
                </View>
            </View>
        );
  }
}

var styles = StyleSheet.create({
  image: {
//    width: Dimensions.get('window').width,
//    width: Dimensions.get('window').width,
//    height: Dimensions.get('window').height,
   flex: 1,
    alignSelf: 'stretch',
//    height: Dimensions.get('window').height,
  },
  captionText: {
    color: '#888',
  },

 titre: {
    height: 50,
    padding: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titreCarte: {
    fontSize: 15,
  },

 caption: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    height: 150,
    padding: 15,backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  thumb: {
    width: 64,
    height: 64,
  },

});