import React, { Component } from 'react'
import { WebView, View, TouchableHighlight, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

class Video extends Component {
  constructor(props) {
    super(props)
    this.state = {
      action: null,
    }
  }

  hate = () => {
    this.setState({
      action: 'You hated it!'
    })
    setTimeout(() => {
      this.setState({
        action: null
      })
      this.props.onPressButton()
    }, 1000);
  }

  love = () => {
    this.setState({
      action: 'You loved it!'
    })
    setTimeout(() => {
      this.setState({
        action: null
      })
      this.props.onPressButton()
    }, 1000);
  }

  render() {
    const video = `https://www.youtube.com/embed/${this.props.video}?modestbranding=1;controls=0;showinfo=0;rel=0;fs=1`
    if (!this.props.video) {
      return null;
    }

    return (
      <View>
      <WebView
          source={{uri: video}}
          style={{width: 320, height: 200}}
      />
      <View style={styles.buttonContainer}>
      <TouchableHighlight style={styles.button} onPress={this.hate}>
        <Icon name="thumbs-o-down" size={20} color="#fff"/>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={this.love}>
        <Icon name="thumbs-o-up" size={20} color="#fff"/>
      </TouchableHighlight>
      </View>
      <View>
        <Text style={styles.text}>
          {this.state.action}
        </Text>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#000',
    flex: 1,
    paddingTop: 6,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    lineHeight: 30
  }
})

export default Video
