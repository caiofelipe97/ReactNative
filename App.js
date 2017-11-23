import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button, Spinner } from './src/components/common';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyDxs_tTHMLakmpGkMNtOD5N6NNcQTFhOck",
      authDomain: "auth-d4b3d.firebaseapp.com",
      databaseURL: "https://auth-d4b3d.firebaseio.com",
      projectId: "auth-d4b3d",
      storageBucket: "auth-d4b3d.appspot.com",
      messagingSenderId: "1944692591"
    });

    firebase.auth().onAuthStateChanged((user)=>{
        if(user) {
          this.setState({ loggedIn: true });
        } else{
          this.setState({ loggedIn: false });
        }
    });
  }

  renderContent(){
    switch (this.state.loggedIn){
      case true:
        return (
        <Button onPress={() => firebase.auth().signOut()}> 
          Log out 
        </Button>
      );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size = "large"/>

    }
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText = "Authentication"/>
         {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;