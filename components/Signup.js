import React,{Component, useState } from 'react';
import { StyleSheet, Text, View , TextInput, submitButton, TouchableOpacity,Image,ImageBackground} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { ScrollView } from 'react-native-gesture-handler';
import {TextField,OutlinedTextField,} from 'react-native-material-textfield';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import { responsiveWidth, responsiveHeight} from 'react-native-responsive-dimensions';
import SafeAreaView from 'react-native-safe-area-view';






export default class Signup extends Component {

 render() {
    

   
    return (
      
       <View style = {styles.container}>
         
             <ScrollView>    
             <Image source = {require('./img/logo.png')} style={{height:responsiveHeight(8), width:responsiveWidth(55), marginLeft:100,marginTop:35  }} />   
       
             

<View style = {styles.FirstName}>
      <OutlinedTextField style = {styles.inputfield}

        label='FirstName'
        keyboardType='key-pad'
        tintColor = '#BE1E2D'
        
        
      />
</View> 

<View style = {styles.Lastname}>
<OutlinedTextField style = {styles.inputfield}

label='LastName'
keyboardType='key-pad'
tintColor = '#BE1E2D'

/>
</View>

<View style = {styles.CNIC}>
<OutlinedTextField style = {styles.inputfield}

label='CNIC'
keyboardType='key-pad'
tintColor = '#BE1E2D'

/>
</View>


<View style = {styles.Email}>
      <OutlinedTextField style = {styles.inputfield}

        label='E-mail'
        keyboardType='key-pad'
        tintColor = '#BE1E2D'
        
        
      />
</View> 

<View style = {styles.password}>
<OutlinedTextField style = {styles.inputfield}

label='Password'
keyboardType='key-pad'
tintColor = '#BE1E2D'
secureTextEntry={true}

/>
</View>

<View style = {styles.Cpassword}>
<OutlinedTextField style = {styles.inputfield}

label='Confirm Password'
keyboardType='key-pad'
tintColor = '#BE1E2D'
secureTextEntry={true}

/>
</View>
<View style = {styles.button}>

<RaisedTextButton  
 onPress = {() => this.props.navigation.navigate('Login')}
title='Signup'
titleColor = 'white'
color = '#BE1E2D'

  />

  </View>

 <Text  style = {styles.line}> </Text>

 <View style = {styles.alignn}>
            <Text style = {styles.creaeAccount}>Already have an Account?</Text>
           
            <TouchableOpacity    style = {styles.LoginBtn}
               onPress = {
                  () => this.props.navigation.navigate('Login')}><Text style={{color:'#BE1E2D'}}> Login</Text></TouchableOpacity>
                  </View>
            
         </ScrollView>
       </View>
    )
 }
}



const styles = StyleSheet.create({
 container: {
   
 },
 Lastname : {
   fontSize : 20,
   marginLeft : 50,
   marginRight : 50,
   marginTop:20,
  
},

FirstName : {
  fontSize : 20,
  marginLeft : 50,
  marginRight : 50,
  marginTop : 20
 
},
password : {
   fontSize : 20,
   marginLeft : 50,
   marginRight : 50,
   marginTop:20,
    
},
CNIC : {
   fontSize : 20,
   marginLeft : 50,
   marginRight : 50,
   marginTop : 20
  
 },

Email : {
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
    
Cpassword : {
   fontSize : 20,
   marginLeft : 50,
   marginRight : 50,
   marginTop:20,
    
},
rBtn:{
   marginLeft:130,
 
},
line:{
   borderBottomWidth: 1,
   marginRight:60,
   marginLeft:60,
   color: 'black'
},
alignn:{
   flexDirection:'row'
   
},
LoginBtn:{
   marginTop:9,

},
creaeAccount:{
   fontSize : 13,
   marginTop : 10,
   marginLeft : 100,
},

 

 });

