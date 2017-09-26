import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, onChangeText, value, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}> {label} </Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        underlineColorAndroid='transparent'
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = {
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 0,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };