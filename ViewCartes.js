/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  ListView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ViewCartes extends Component {
    carte = {};
    constructor() {
        super();
        this.carte = {};
        this._renderRow = this._renderRow.bind(this);
    }


  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.name,
  });


  render() {
        const { params } = this.props.navigation.state;
        this.carte = params.carte;

         const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let listData = [];
        for( var key in  this.carte.descriptions){
             listData.push(this.carte.descriptions[key]);
        }
         this.state = {
           dataSource: ds.cloneWithRows(listData),
         };

        return (
               <ScrollView style={styles.viewCarte}>
                    <View  style={styles.titre} >
                        <Text style={styles.titreCarte}> { this.carte.nomComplet} </Text>
                    </View>
                    <View  style={styles.imageDesc}>
                        <Image source={{ uri: this.carte.image}} resizeMode='stretch' style={styles.image} />
                    </View>
                    <View style={styles.containerTitleDesc}>
                      <Text style={styles.titleDesc}>Description de la carte</Text>
                   </View>
                         <ListView
                            style={styles.container}
                            dataSource={this.state.dataSource}
                            renderRow= {this._renderRow}
                            renderSeparator={this._renderSeparator}
                          />
               </ScrollView>
        );
  }

  _renderRow(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
       return (
              <View style={styles.caption}>
                 <Text style={styles.descName}> { rowData.name }</Text>
                <Text style={styles.descDescription}> { rowData.description }</Text>
              </View>
        );
  }

  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
      return (
        <View
          key={`${sectionID}-${rowID}`}
          style={{
            height: adjacentRowHighlighted ? 4 : 1,
            backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
          }}
        />
      );
    }
}

var styles = StyleSheet.create({

  image: {
    width: Dimensions.get('window').width * 0.50,
    height: Dimensions.get('window').height * 0.50,
  },

  captionText: {
    fontSize: 16,
    color: '#888',
  },

imageDesc: {
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
           },

  descName: {
    fontSize: 17,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#888',
  },

    descDescription: {
      fontSize: 16,
      color: '#888',
    },

  containerTitleDesc: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

 titre: {
    height: 50,
    padding: 15,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

 titleDesc: {
    justifyContent: 'center',
    fontSize: 18,
        fontWeight: 'bold',
    alignItems: 'center',
  },

  titreCarte: {
    fontSize: 20,
  },

 caption: {
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
        padding: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F5FCFF',
  },

  viewCarte: {
    backgroundColor: '#F5FCFF',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth:0,
        shadowColor: '#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft:5,
        marginRight:5,
        marginTop:10,
  },

});