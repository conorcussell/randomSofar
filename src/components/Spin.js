import React, { Component } from 'react'

import {
  TouchableHighlight,
  Text,
  View,
} from 'react-native'

const videos = ['1kk2JAk7U7Y', 'cKd9GlqTIhc', 'TAAfhr680PY']

import Video from './Video'

class Spin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenVideo: null,
    }
  }

  onPressButton = () => {
    this.setState({
      chosenVideo: videos[Math.floor(Math.random()*videos.length)],
    })
  }

  render() {
    return (
      <View>
      <TouchableHighlight onPress={this.onPressButton}>
        <Text>
          Go!
        </Text>
      </TouchableHighlight>
      <Video video={this.state.chosenVideo} />
      </View>
    )
  }
}

export default Spin
