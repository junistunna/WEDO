import React,{Component} from 'react';
import { StyleSheet,
    Text,
    View ,
    TextInput,submitButton,
   TouchableOpacity,
   Image,
   ImageBackground,
   Button,
   Dimensions,
   ScrollView
} from 'react-native';
import Order from './Order';
import Cart from './Cart';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import Categories from './Categories';
import Dashboard from './Dashboard';

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: Dashboard,
    },
    Categories: {
      screen: Categories,
    },
  });
  
  const AppContainer = createAppContainer(MyDrawerNavigator);


const styles = StyleSheet.create({


 });

 
export default class Drawer extends Component {
    render() 
  {
    
    return <AppContainer />;
    
    
  }


}