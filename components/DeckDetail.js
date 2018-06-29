import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';

class DeckDetail extends Component {
 
  render () {
    return (
      <View>
        <Text>DeckDetail</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewCard', { entryId: 1 })}>
          <Text>New Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Quiz', { entryId: 1 })}>
          <Text>StartQuiz</Text>
        </TouchableOpacity>        
      </View>
    );
  }
} 

export default DeckDetail;