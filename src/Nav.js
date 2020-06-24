import React , {Component} from 'react';

import   {Auth, Profile ,Otp, Home , Slider} from '../src';
//import Otp from './Otp';
import {  createSwitchNavigator, createAppContainer  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default class Nav extends Component {
 
  render() {
    const AuthStack = createStackNavigator({
      Slider: { screen: Slider },
      Auth: { screen: Auth },
      Otp: { screen: Otp }
    }, {
      initialRouteName: 'Slider',
      headerMode: 'none',
    });

    const AppStack = createStackNavigator({
      Home: { screen: Home },
      Profile: { screen: Profile },
    }, {
      initialRouteName: 'Home',
      headerMode: 'none',
    });

    const MainNavigator = createSwitchNavigator({
      auth: AuthStack,
      app: AppStack

    },{
      initialRouteName:'auth'
    });
    const OverAllContainer = createAppContainer(MainNavigator);
    return (
    <OverAllContainer />
    );
   // return(<Otp />);
  }

}

//export  {Nav};