import React, { Component } from 'react'
import { WebView, View, TouchableHighlight, Text } from 'react-native'

class Video extends Component {
  render() {
    const video = `https://www.youtube.com/embed/${this.props.video}?autoplay=1`
    if (!this.props.video) {
      return null;
    }
    return (
      <View>
      <WebView
          source={{uri: video}}
          style={{marginTop: 20, width: 300, height: 200}}
      />
      <TouchableHighlight>
        <Text>Bad</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text>Good</Text>
      </TouchableHighlight>
      </View>
    )
  }
}

export default Video
