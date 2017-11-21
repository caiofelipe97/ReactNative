import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Header } from '.components/common';

class App extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Header headerText = "Authentication"/>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;