/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import Container from './src/routs';

export default class App extends Component {
   render() {
       return (
        <View style={{ flex: 1 }}>
          <Container />
        </View>
       );
   }
}
