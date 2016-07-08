import React, { Component } from 'react'

import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native'

class Header extends Component {
  render() {
    return(
      <View style={styles.header}>
        <Image style={styles.logo}
          source={{uri: 'https://dax2lgcd0wbaz.cloudfront.net/assets/shared/sofar-logo-3dbe44e9a52fd946e98f029a8e0434c10dc197a15a53724a4b619eacd2f4fe93.png'}}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 85,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    backgroundColor: '#0f0f0f'
  },

  logo: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
  },

  text: {
    color: '#fff'
  }

})

export default Header
