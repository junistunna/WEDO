import React,{Component} from 'react';
import { StyleSheet,
    Text,
    View ,
    TextInput,submitButton,
   TouchableOpacity,
   Image,
   ImageBackground,
   Button,
   Switch
} from 'react-native';

import {TextField,OutlinedTextField,Er} from 'react-native-material-textfield';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import { ScrollView } from 'react-native-gesture-handler';


import { responsiveWidth, responsiveHeight} from 'react-native-responsive-dimensions';
import {HelperText} from 'react-native-paper';
import { Form } from 'native-base';
import PasswordInputText from 'react-native-hide-show-password-input';



export default class Login extends Component {
state ={
   Email:'',
   password:''
}




/* handleLogin = () =>{
   const{Email,password} =this.state
   firebase.auth().signInWithEnailAndPassword(Email,password)
}
  
*/

// validates = () => { 

//    const{Email , password} = this.state
//    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

//    if (Email == "") {
//       errorTextalert("Please fill Email field")
//       return false
//    }

//    else if (password == "") {
//       alert("Please fill Password field")
//       return false
//    }

//    else if (reg.test(this.state.Email)==false) {
//       alert("Inavlid Email format")
//       return false
//    }

//    else if (password.length < 8) {
//       alert("Password should be atleast 8 charachters")
//       return false
//    }
//    return true
// } 



 render() {

   const { password } = this.state;
    return (
      
       <View style = {styles.container}>


    
     <ScrollView>
    <Image source = {require('./img/logo.png')} style={{height:responsiveHeight(8), width:responsiveWidth(55), marginLeft:100,marginTop:35  }} />   
          
          <Text style = {styles.loginForm}>LOGIN</Text>

          <View style = {styles.username}>
      <OutlinedTextField style = {styles.inputfield}

        label='Email'
        keyboardType='key-pad'
        tintColor = '#BE1E2D'
        onChangeText ={Email  => this.setState({Email})}
        value ={this.state.Email}
      />

{/* <HelperText
          type="error"
          visible={!this.state.Email.includes('@')}
>
          Email address is invalid!
        </HelperText> */}

</View> 

<View style = {styles.password}>
<OutlinedTextField style = {styles.inputfield}

label='Password'
keyboardType='key-pad'
tintColor = '#BE1E2D'
secureTextEntry={true}
onChangeText ={password  => this.setState({password})}
value ={this.state.password}


/>


 

{/* <HelperText
          type="error"
          visible={!this.state.password.length('8')}
>
          Password address is invalid!
</HelperText> */}


</View>

<View style = {styles.button}>

<RaisedTextButton  
 onPress={( ) =>{
   //if ( this.validates( ) ) {
      this.props.navigation.navigate('Dashboard')  
  // } 
   
}}
title='Login'
titleColor = 'white'
color = '#BE1E2D'

  />

  </View>
            <View
                style={{
                    marginTop : 20,
                    marginLeft : 50,
                    marginRight : 50,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
            }}
/> 

            <View style = {styles.alignn}>
            <Text style = {styles.creaeAccount}>Need to Create an Account?</Text>
           
            <TouchableOpacity    style = {styles.SignupBtn}
               onPress = {
                  () => this.props.navigation.navigate('Signup')}><Text style={{color:'#BE1E2D'}}> Signup</Text></TouchableOpacity>
                  </View>
            
           

                  </ScrollView>
         
       </View>

       
       
    )
 }
}


const styles = StyleSheet.create({
 container: {
   
 },

username : {
   fontSize : 20,
   marginLeft : 50,
   marginRight : 50,
   marginTop:65,
   
   

   
   
},

password : {
  fontSize : 20,
  marginLeft : 50,
  marginRight : 50,
  marginTop : 20

  
  
},

button : {
marginLeft : 80,
marginRight : 80,
marginTop : 20,
color : 'white',
},
 
   
 
 loginForm:{
     color : '#EF4747',
     fontSize : 35,
     marginLeft : 170,
     marginTop : 25,
     fontFamily:'Helvetica, sans-serif',
     fontWeight:'bold'
     
     

     
 },
 SignupBtn:{
    marginTop:9,

 },

 

 
 creaeAccount:{
        fontSize : 13,
        marginTop : 10,
        marginLeft : 100,
 },
 alignn:{
    flexDirection:'row'
    
 }

 });