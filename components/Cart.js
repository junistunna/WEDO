import React,{Component} from 'react';
import { StyleSheet,  View, Image, ImageBackground,TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Text ,Content,Card,CardItem,Thumbnail} from 'native-base';
import CustomHeader from './Dashboard'
import { responsiveWidth, responsiveHeight} from 'react-native-responsive-dimensions';
import { ScrollView } from 'react-native-gesture-handler';






export default class Cart extends Component {
  render(){
    return (
    <View style={styles.container}>

      <ScrollView>



      </ScrollView>

    </View>




  );
}
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  location:{
    textAlign : 'center',
    color : 'white',
    fontSize :20
  },

  Head:{
    backgroundColor:'blue',
    textAlign : 'center'
  },

  innerText:{
    fontSize : 30,
    textAlign : 'center'
  }
 
});
