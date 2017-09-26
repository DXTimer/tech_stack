import React, { Component } from 'react';
import { Text } from 'react-native';

class ListItem extends Component {
  render() {
    return(
      <Text>{this.props.library.id}</Text>
    );
  }
}

export default ListItem;
