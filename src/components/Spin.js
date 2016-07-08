import React, { Component } from 'react'

import {
  TouchableHighlight,
  Text,
} from 'react-native'

class Spin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: ['video', 'another one', 'a third'],
    }
  }

  onPressButton() {

  }

  renderVideo(video) {
    return (
      <Text>
        {video}
      </Text>
    )
  }

  render() {
    return (
      <TouchableHighlight onPress={this.onPressButton}>
        <Text>
          Go!
        </Text>
      </TouchableHighlight>
    )
  }
}

export default Spin
