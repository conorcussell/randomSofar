import React, { Component } from 'react'

import {
  TouchableHighlight,
  Text,
  View,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

const videos = [
  {artist: 'Joseph Wander', title: 'Fear', uid: 'muDgM2vJHJ0', city: 'London'},
  {artist: 'Carnivals', title: 'Cruel Intentions', uid: 'MQ1_oXtRtnA', city: 'London'},
  {artist: 'Nevamis', title: 'All In Your Head', uid: 'qy_FkTp4EAI', city: 'London'},
  {artist: 'Yogisha Wa Hashiru', title: 'Lucky Old Sun', uid: '5nE6JsUwlx4', city: 'Tokyo'},
  {artist: 'Norimasa Sakanoshita', title: 'Wasanbon', uid: 'LmA9QRhwTAM', city: 'Tokyo'},
  {artist: 'Kai Takahashi', title: 'PARTY TALK', uid: '0UfSbuemqPc', city: 'Tokyo'},
  {artist: 'Tom West', title: 'I Drank all the Rum', uid: 'sOQ9I_Th5c0', city: 'Adelaide'},
  {artist: 'Comet Kid', title: 'So Far', uid: 'm4Cap2UCMz4', city: 'Molde'},
  {artist: 'Brothers Water', title: 'I Tried Calling', uid: 'yGS7JxHSrbo', city: 'Leeds'},
  {artist: 'The Kickback', title: 'Stings\'s Teacher Years', uid: 'S9wn0L3Mz3E', city: 'Chicago'},
  {artist: 'Hawthorne', title: 'Weight', uid: 'hOWHSfCIPok', city: 'New York'},
  {artist: 'Guizado', title: 'Tigre', uid: '3rHfZ4C-C9o', city: 'São Paulo'},
  {artist: 'Moulettes', title: 'Behemooth', uid: 'ocpTgeaHiys', city: 'Oxford'},
]

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
      chosenVideo: videos.splice(Math.random() * videos.length | 0, 1)[0]
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
