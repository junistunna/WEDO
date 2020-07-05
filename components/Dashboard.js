import React,{Component} from 'react';
import { StyleSheet,  View, Image, ImageBackground,TouchableOpacity,ScrollView, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';

import { createBottomTabNavigator} from 'react-navigation-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from 'react-navigation-stack';

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right,Title} from 'native-base';
import { responsiveWidth, responsiveHeight} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';  
import Cart from './Cart';
import Categories from './Categories';
import Order from './Order';
import { SearchBar } from 'react-native-elements';
import Profile from './Profile';
import Map from './Map';

class CustomHeader extends Component {
  state ={
    Email:'',
    displayname:''
 }
 /* componentDidMount(){
   const {Email,displayname}  = firebase.auth().currentUswe;
   this.setState({Email,displayname });
 }

signOutUser =() =>{
  firebase.auth().signOut();
}*/

state = {
  search: '',
};

updateSearch = search => {
  this.setState({ search });
};

  constructor(props){ 
    super(props);
    this.state={

    };
  }

  
  
  render(){
    const { search } = this.state;

    return (
      
      <Header headerTintColor='red'>
       <View style={styles.barSearch}>
       <SearchBar
        placeholder="Search"
        placeholderTextColor="white"
        lightTheme="True"
        onChangeText={this.updateSearch}
        round = "True"
        value={search}
        searchIcon = {{size : 30}}
        fontColor = "white"
        showLoading
      />
        </View>  
      </Header>
    



      );
    }
    }

    
    

class Dashboard extends Component {
  
static navigationOptions = {
  drawerLabel: 'Home',
  
}


  render(){
    
    
    
    return (



      
    <View style={styles.container}>

<CustomHeader/>
      <ScrollView>
      
     <View> 
           
       
     <Container>
        
        <Content>
          <Card >
            
            <CardItem cardBody onPress={() => this.props.navigation.navigate('Cart')}>
            <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Categories')} >
              <ImageBackground source={require('./img/food.jpg')} style={{height:responsiveHeight(24), width:responsiveWidth(99), flex: 1}}
                blurRadius = {Platform.OS == 'android' ? 3:5}>
               <Text style={{fontWeight : 'bold' , color : 'white' , paddingLeft :  150 , paddingTop :50 , fontSize : 30}}>FOOD</Text>
                </ImageBackground>
           </TouchableOpacity>
            </CardItem>
            
            
            <CardItem>
              
              <Body >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Categories')}>
                  <Text style={styles.innerText}>COOKING</Text>
                </TouchableOpacity>
              </Body>
              
            </CardItem>
            </Card>
            <View style={styles.direction}>
            <Card>
            <CardItem cardBody>
            <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Categories')} >
              <Image source={require('./img/sketching.jpg')} style={{height:responsiveHeight(24), width:responsiveWidth(50), flex: 1}}/>
           </TouchableOpacity>
            </CardItem>
            <CardItem>
              
              <Body>
                
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Categories')}>
                  <Text  style={styles.sketching}>SKETCHING</Text>
                </TouchableOpacity>
              </Body>
              
            </CardItem>

            </Card>
            <Card>
            <CardItem cardBody>
            <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Categories')} >
              <Image source={require('./img/baking.jpg')} style={{height:responsiveHeight(24), width:responsiveWidth(50), flex: 1}}/>
           </TouchableOpacity>
            </CardItem>
            <CardItem>
              
              <Body>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('Categories')}>
                
                  <Text  style={styles.baking}>BAKING</Text>
                </TouchableOpacity>
              </Body>
              
            </CardItem>


          </Card>
          </View>
        </Content>
      </Container>

</View>


 

</ScrollView>

    </View>
    
  );
    }


}



const TabNavigator = createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      tabBarLabel: 'Home',

      tabBarIcon: () => (
        <Icon name="home" color={"#BE1E2D"} size={25} tintColor="black" />
      )
    }
  },
  Order: {
    screen: Order,
    navigationOptions: {
      tabBarLabel: 'Order',
      tabBarIcon: () => (
        <Icon name="shopping-bag" color={"#BE1E2D"} size={25} />
      )
    }
  },

  Cart: {
    screen: Cart,
    navigationOptions: {
      tabBarLabel: 'Cart',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="shopping-cart" color={"#BE1E2D"} size={25} />
      )
    }
  },
  Categories: {
    screen: Categories,
    navigationOptions: {
      tabBarLabel: 'categroies',

      tabBarIcon: ({ tintColor }) => (
        <Icon name="list-ul" color={"#BE1E2D"} size={25} />
      )
    }
  },

  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',

      tabBarIcon: ({ tintColor }) => (
        <Icon name="user-circle" color={"#BE1E2D"} size={25} />
      )
    }
  },

  Map: {
    screen: Map,
    navigationOptions: {
      tabBarLabel: 'Map',

      tabBarIcon: ({ tintColor }) => (
        <Icon name="map-signs" color={"#BE1E2D"} size={25} />
      )
    }
  },
});








const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },


  food:{
    borderWidth : 1,
    borderColor : 'white',
    backgroundColor : 'white',
    paddingLeft : 150,
    fontWeight : 'bold' 
  },

  innerText:{
    paddingLeft : 160
  },

  sketching:{
    paddingLeft : 50
  },

  baking:{
    paddingLeft : 50
  },

  direction:
  {
    flexDirection : 'row'

  },
  barSearch:{
    width : 250,
    color : 'white'
}
});
export default createAppContainer(TabNavigator);