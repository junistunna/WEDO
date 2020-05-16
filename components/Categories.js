import React,{Component} from 'react';
import { StyleSheet,  View, Image, ImageBackground,TouchableOpacity, } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title,Text } from 'native-base';
import CustomHeader from './Dashboard'
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { TabViewVertical, SceneMap } from 'react-native-tab-view';




export default class Categories extends Component {

  
  
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

static navigationOptions = {
  drawerLabel: 'Categories'
}
  render(){
    const { search } = this.state;
    return (
    <View style={styles.container}>
       <Header>
         
       <View style={styles.barSearch}>
       <SearchBar
        placeholder="Search"
        placeholderTextColor="white"
        lightTheme="True"
        onChangeText={this.updateSearch}
        round = "True"
        value={search}
      />
        </View>  
        
        <Right>
         <Button transparent>
            <Icon 
            name='map-marker'
            color = 'yellow'
            size = {30}
           />
          </Button>
         </Right>     
      </Header>

     

  
     
 </View>
 
  );
}
}





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
  barSearch:{
    width : 250,
  },


  
});
