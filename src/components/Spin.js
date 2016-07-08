import React, { Component } from 'react'

import {
  TouchableHighlight,
  Text,
  View,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
const cities = ['london', 'new york', 'tokyo', 'chicago', 'oxford', 'leeds', 'brighton', 'oslo', 'adelaide', 'quito', 'brisbane', 'sydney', 'dallas', 'denver', 'los angeles']
import Video from './Video'

class Spin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenVideo: null,
      loaded: false,
    }
  }
  makeUrl(city) {
    return `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCHc2JX_PyiWIsiRU_xJoUDg&q=${city}&key=AIzaSyA3YLm_ERdI2yosiFNTgQeT6COePn2guHo`
  }

  fetchData(city) {
    fetch(this.makeUrl(city))
      .then((response) => response.json())
      .then((responseData) => {
        const videos = responseData.items
        let randomVideo = videos.splice(Math.random() * videos.length | 0, 1)[0]
        this.setState({
          chosenVideo: randomVideo,
          loaded: true,
        });
        console.log(responseData)
      })
      .done();
  }

  onPressButton = () => {
    let city = cities.splice(Math.random() * cities.length | 0, 1)[0]
    this.fetchData(city)
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
