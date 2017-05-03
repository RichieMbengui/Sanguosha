/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text, Navigator,TouchableNativeFeedback, Image } from 'react-native';

export default class ListCartes extends Component {
    file = {};
    constructor() {
        super();
        this.file = {};
         this._renderRow = this._renderRow.bind(this);
    }

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
          <ListView
            style={styles.container}
            dataSource={this.state.dataSource}
            renderRow= {this._renderRow}
            renderSeparator={this._renderSeparator}
          />
        );
    }

  _renderRow(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
    const { navigate } = this.props.navigation;
      let imageurl =  rowData.image;
       return (
              <View >
                  <TouchableNativeFeedback
                    onPress={() => navigate('All',{carte: rowData})}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={styles.row}>
                          <Image source={{ uri:  rowData.image}}  style={styles.carte} />
                          <Text style={styles.text}>
                            {  rowData.nomComplet}
                          </Text>
                        </View>
                </TouchableNativeFeedback>
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


var hashCode = function(str) {
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
  container: {
    backgroundColor: '#F5FCFF',
  },

  carte: {
    height: 70,
    width: 60,
    borderRadius: 4,
  },

  text: {
    marginLeft: 12,
    marginTop: 10,
    fontSize: 16,
  },
});