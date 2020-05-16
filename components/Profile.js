



import React,{Component} from 'react';
import { StyleSheet,  View, Image, ImageBackground,TouchableOpacity, } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Text ,Content,Card,CardItem,Thumbnail} from 'native-base';
import CustomHeader from './Dashboard';
import { Conversation } from 'react-native-watson';
import ChatBot  from "react-native-chatbot"; 
import { responsiveWidth, responsiveHeight} from 'react-native-responsive-dimensions';

// Conversation.initialize( "yG6Eid66HK_SYGDa5s0lyz3zXj2_FoiU7bRI1qKi2LUQ" )
// let workspaceId="10f0ecf9-98b7-4d0f-90bf-fce4137e8926"

// Conversation.message(workspaceId)

//             .then(response => {
//                 console.log(JSON.stringify(response))
                
//                 this.setState({output: response.output.text, context: response.context})
//             })
            
// // To continue a conversation, and send the user's response, send the workspaceId and the input (text and saved context)
 
// let input = {
//                 text: this.state.text,
//                 context: this.state.context
//             }
 
// Conversation.message(workspaceId, input)
//     .then(response => {
//         console.log(JSON.stringify(response))
//         this.setState({output: response.output.text, context: response.context})
//     })


export default class Profile extends Component {
  render(){
    return (
    <View style={styles.container}>

    
    

 
    </View>

  );
}
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  
  
});
