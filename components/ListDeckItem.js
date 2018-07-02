import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { white, gray } from '../utils/colors';

class ListDeckItem extends Component {
  render() {
    const { title, cardsQuantity, onClick } = this.props;
    return (
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={onClick}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{`${cardsQuantity} cards`}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 30,
    backgroundColor: white,
    borderColor: gray,
    borderBottomWidth: 0.5,
  },
  title: {
    textAlign: 'center',
    fontSize: 17,
  },
  subtitle: {
    textAlign: 'center',
    color: gray,
  },
});

export default ListDeckItem;
