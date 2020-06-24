import React , {Component} from 'react';
import SplashScreen from 'react-native-smart-splash-screen';
import 'react-native-gesture-handler';
import {Text} from 'react-native';
import Nav from './src/Nav';
class App extends Component {

  componentDidMount () {
    //SplashScreen.close(SplashScreen.animationType.scale, 850, 500)
    SplashScreen.close({
       animationType: SplashScreen.animationType.scale,
       duration: 600,
       delay: 500,
    });
  }
  
  render() {
    return (<Text>UU</Text>);
  }

}

export default App;
