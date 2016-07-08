import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default App
