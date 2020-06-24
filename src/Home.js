import React , {Component} from 'react';
import {
  View,
  Text,
  AsyncStorage
} from 'react-native';

class Home extends Component {
  async componentWillMount(){
 // const check=await AsyncStorage.getItem('first_time');
  //if 
}
  render() {
    return (<View><Text>Home</Text></View>)
  }

}

export  {Home} ;