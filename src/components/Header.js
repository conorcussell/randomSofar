import React, { Component } from 'react'

import {
  Text,
  View,
} from 'react-native'

class Header extends Component {
  render() {
    return(
      <View style={styles.header}>
        <Text style={color: 'white'}>Sofar Sounds</Text>
      </View>
    )
  }
}

export default Header
