// Import libraries for making a component
import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
// Make a component

const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle} >{props.headerText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    paddingTop: 15,
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
});

export {Header};
