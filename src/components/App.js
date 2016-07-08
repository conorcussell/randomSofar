import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import Header from './Header'
import Spin from './Spin'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Spin />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#262626',
  }
})

export default App
