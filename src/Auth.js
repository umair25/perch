import React , {Component} from 'react';
import {
  View,
  Text,
  AsyncStorage
} from 'react-native';

class Auth extends Component {
  async componentWillMount(){
 // const check=await AsyncStorage.getItem('first_time');
  //if 
}
  render() {
    return (<View><Text>Auth</Text></View>)
  }

}

export  {Auth};