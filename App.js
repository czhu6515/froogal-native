import React from 'react';
import {Text, View } from 'react-native';
import VenueList from './src/components/VenueList'
import { Header } from './src/components/common';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText='FROOGAL'/>
        <VenueList />
      </View>
    );
  }
}


