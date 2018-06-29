import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';

class ListDecks extends Component {
 
  render () {
    return (
      <View>
        <Text>ListDecks</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetail', { entryId: 1 })}>
          <Text>Entrar no deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
} 

export default ListDecks;
