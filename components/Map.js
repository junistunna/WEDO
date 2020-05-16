
import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, View } from "react-native";
//import { TabNavigator } from "react-navigation";
import { Container, Text } from "native-base";
import Geolocation from '@react-native-community/geolocation';
import MapView , {PROVIDER_GOOGLE} from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { SearchBar } from "react-native-elements";

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      latitude: '',
      longitude: '',
      region: {
        latitude: 33.6498,
        longitude: 73.0302,
        latitudeDelta: 0.0462,
        longitudeDelta: 0.0261,
      }
    };
  }

  watchID= null;

  componentDidMount() {
    // Geolocation.getCurrentPosition(
    //   position => {
    //     const initialPosition = JSON.stringify(position);
    //     this.setState({
    //       region: {
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude,
    //         // latitudeDelta: 0.0462,
    //         // longitudeDelta: 0.0261,
    //     },
    //     });
    //     this.setState({initialPosition});
    //   },
    //   error => alert(error.message),
    //   {enableHighAccuracy: true, timeout: 200000, maximumAge: 1000},

    // );
    // this.watchID = Geolocation.watchPosition(position => {
    //   this.state.latitude = position.coords.latitude;
    //   this.state.longitude = position.coords.longitude;
      
    //   const lastPosition = JSON.stringify(position);
    //   this.setState({lastPosition});
    // });


    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
          const currentLongitude = JSON.stringify(position.coords.longitude);
          //getting the Longitude from the location json
          const currentLatitude = JSON.stringify(position.coords.latitude);
          //getting the Latitude from the location json
      },
      (error) => alert(error.message),
      { 
         enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 
      }
   );
    
   }

  //  componentWillUnmount() {
  //   this.watchID != null && Geolocation.clearWatch(this.watchID);
  // }


  render() {
    return (
      <View>

        <SearchBar
          ref='searchBar'
          placeholder='Find me'
          barStyle="ight"
        />
        <MapView
          provider = {PROVIDER_GOOGLE}
          style = {styles.map}
          region={this.state.region}
        >

<MapView.Marker
            coordinate={{latitude: 33.6498,
              longitude: 73.0302}}
            title={"MY HOME"}

         />

        </MapView>

        
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  
  title: {
    fontWeight: '500',
  },
  map:{
    height : '100%'
  }
});

export default Map;




// import React,{Component} from 'react';
// import { StyleSheet,  View, Image, ImageBackground,TouchableOpacity , Platform} from 'react-native';
// import { Container, Header, Left, Body, Right, Button, Icon, Title,Text ,Content,Card,CardItem,Thumbnail} from 'native-base';
// import CustomHeader from './Dashboard'
// import { responsiveWidth, responsiveHeight} from 'react-native-responsive-dimensions';
// import { ScrollView } from 'react-native-gesture-handler';
// import MapView,{PROVIDER_GOOGLE , Marker} from 'react-native-maps';

// //import {check, PERMISSIONS, RESULTS , request} from 'react-native-permissions';
// import MapboxGL from "@react-native-mapbox-gl/maps";

// //import geolocation from 'react-native-geolocation-service';

// MapboxGL.setAccessToken("pk.eyJ1IjoianVuaXN0dW5uYSIsImEiOiJjazZ4ZXN2azcwOTVvM21vMHR6dGIwMzVyIn0.fX8gY_R6QLMK9KPywceulw");





// export default class Map extends Component {

//  constructor(props){
//    super(props);
//    this.state = {
//     latitude : 0 ,
//     longitude : 0,
//     latitudeDelta: 0,
//     longitudeDelta: 0,
//     initialPosition:0
//    };
   
//   }

//   componentDidMount() {

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         console.log("wokeeey");
//         console.log(position);
//         this.setState({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           error: null,
//         });
//       },
//       (error) => this.setState({ error: error.message }),
//       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
//     );
//     // navigator.geolocation.getCurrentPosition((position) => {
//     //   var lat = parseFloat(position.coords.latitude)
//     //   var long = parseFloat(position.coords.longitude)

//     //   var initialRegion = {
//     //     latitude: lat,
//     //     longitude: long,
//     //     latitudeDelta: LATITUDE_DELTA,
//     //     longitudeDelta: LONGITUDE_DELTA,
//     //   }

//     //   this.setState({initialPosition: initialRegion})
//     // },
//     // (error) => alert(JSON.stringify(error)),
//     // {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
//   }


 

//   // componentDidMount() {
//   //   navigator.geolocation.getCurrentPosition(
//   //     position => {
//   //       this.setState({
//   //         latitude : position.coords.latitude,
//   //         longitude : position.coords.longitude,
//   //         error : null
//   //       });
//   //     },
//   //     error => this.setState({error : error.message}),
//   //     {enableHighAccuracy : true , timeout : 20000 , maximumAge : 2000}
      
//   //   );
//   // }
  
    



//   // getCurrentPosition = () => {
//   //   Geolocation.getCurrentPosition{
//   //     position => {
//   //       console.log(JSON.stringify(position));
//   //     }
//   //   }
//   // }

//     render(){
//       return (
//       <View style={styles.container}>
  
//         <ScrollView>
//           <Text>LOCATIONnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</Text>
        
//         <Text> {this.state.latitude} </Text>
//         <Text> {this.state.longitude} </Text>
//         <Text> {this.state.error} </Text>

    
  

//    {/* <MapboxGL.MapView
//       styleURL = {MapboxGL.styleURL.Street}
//       zoomLevel ={15}
//       centerCoordinate ={[33.6844 , 73.0479]}
//       styles = {style.Container}
//    /> */}
//         </ScrollView>
  
//       </View>
  
  
  
  
//     );
//   }
//   }
  
  
  
  
//   const styles = StyleSheet.create({
//     container: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       justifyContent: 'flex-end',
//       alignItems: 'center',
//     },
//     map: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//     },
//   });
  