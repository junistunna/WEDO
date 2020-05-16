/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';



/*class HomeScreen extends React.Component{
  render(){
  return (
    <View>
        <Text>Home Screen</Text>
    <Button
    title="Go to Details"
    onPress={() => this.props.navigation.navigate('Details')}
  />
    
    </View>
  );
          }
};*/





const RootStack = createStackNavigator(
  {
    Login:Login,
    Signup:Signup,
    Dashboard:Dashboard,

    
    
  },
  {
   defaultNavigationOptions:
    {
      header:null
    }
  }
);



const AppContainer = createAppContainer(RootStack);



export default class App extends Component {
  render() 
  {
    return <AppContainer />;
    
    
  }
}



