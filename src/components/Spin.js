import React, { Component } from 'react'

import {
  TouchableHighlight,
  Text,
  View,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

const videos = ['1kk2JAk7U7Y', 'cKd9GlqTIhc', 'TAAfhr680PY', ]

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
    const selector = (
      <View style={{marginTop: 100}}>
      <Text style={{color: '#fff', textAlign: 'center', fontSize: 20, paddingLeft: 10, paddingRight: 10}}>
        Sofar is a global community offering intimate gigs all around the world.
        Shake your phone to discover something new!
      </Text>
      <TouchableHighlight onPress={this.onPressButton} style={{alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 20}}>
        <Icon name="globe" size={100} color="#fff" onPress={this.onPressButton}/>
      </TouchableHighlight>
      </View>
    )

    const vid = <Video video={this.state.chosenVideo} onPressButton={this.onPressButton}/>
    const viewToRender = this.state.chosenVideo ? vid : selector
    return (
      <View>
        {viewToRender}
      </View>
    )
  }
}

export default Spin
