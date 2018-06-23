/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class YooMain extends Component {
  render() {
    return (
      <View style={styles.container}>

       <Image
          style={{width: 96, height: 111}}
          source={require('./img/yooba_logo96x111.png')}
        />

        <Text style={styles.welcome}>
          Welcome to Yooba!
        </Text>
        <Text style={styles.instructions}>
          https://yooba.org
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('YooMain', () => YooMain);
