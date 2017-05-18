/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { View,ScrollView,  ListView, StyleSheet,Dimensions, Text, Navigator,TouchableNativeFeedback,TouchableHighlight, Image } from 'react-native';

export default class ListCartes extends Component {
    file = {};
    constructor() {
        super();
        this.file = {};
         this._renderRow = this._renderRow.bind(this);
    }

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.name,
  });

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const { params } = this.props.navigation.state;

        this.file = params.file;
        let listData = [];
        for( var key in  this.file){
             listData.push(this.file[key]);
        }
         this.state = {
           dataSource: ds.cloneWithRows(listData),
         };

        return (

         <ScrollView style={styles.viewRow}>
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow= {this._renderRow}
                contentContainerStyle={{flexDirection:'row', flexWrap:'wrap', alignItems: 'center'}}
            />
          </ScrollView>

        );
    }

  _renderRow(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
    const { navigate } = this.props.navigation;
      let imageurl =  rowData.image;
       return (
                  <TouchableNativeFeedback
                    onPress={() => navigate('All',{carte: rowData, name:rowData.nomComplet})}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                      <View style={styles.row}>
                        <Image style={styles.carte} source={{ uri:  rowData.image}} />

                      </View>
                  </TouchableNativeFeedback>
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


var hashCode = function(str) {
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};

var styles = StyleSheet.create({

 viewRow: {
        flex:1,
            marginTop: 5,
  },

// descrition: {
//        height: Dimensions.get('window').width / 2,
//  },

 list: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 2,
    width: Dimensions.get('window').width / 3 - 4,
    //width:120,
    height: 120,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#CCC'
  },
  carte: {
    height: 120,
        width: 90,
    resizeMode: 'contain',
    borderRadius: 4,
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold'
    }

});