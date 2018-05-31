import React, { Component } from 'react';
 
import { 
    Text, 
    StyleSheet, 
    View, 
    ListView, 
    TextInput, 
    ActivityIndicator, 
    Alert 
} from 'react-native';

export default class SearchScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:false,
            text:'',
            quote:'Sample Text Quote',
            author:'Sample Author name',
            logger:'',
            hashtags:[]
        }
         this.arrayHolder=['inspire','management','sports','life','love','funny','art']
    }
    
    componentDidMount(){
       
    }
    
    GetListViewItem (fruit_name) {
        Alert.alert(fruit_name);
    }
    
    SearchFilterFunction(){
         
        if( this.arrayHolder.indexOf(this.state.text.toLowerCase()) > -1 ) { 
            return fetch("http://quotes.rest/qod.json?category="+this.state.text.toLowerCase())
               .then((response)=>response.json())
               .then((responseJson) => {
                   console.log(responseJson.contents.quotes[0].quote);
                     
                     this.setState({
                      isLoading: false,
                      quote:responseJson.contents.quotes[0].quote,
                      author:responseJson.contents.quotes[0].author
             
                     });
                    })
                .catch((error) => {
                    console.error(error);
                });
            
        }else{
            this.setState({
                quote:'Please use either inspire,art,love,management,sports,life,love,funny,art'
            })
        }
         
    }
    
    ListViewItemSeparator = () => {
        return (
        <View
            style={{
            height: .5,
            width: "100%",
            backgroundColor: "#000",
            }}
        />
        );
    }
    
    
    render() {
        if (this.state.isLoading) {
        return (
            <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
            </View>
        );
        }
    
        return (
    
        <View style={styles.MainContainer}>
     
        <TextInput 
        style={styles.TextInputStyleClass}
  
         onChangeText={(text) => this.setState({text:text})}
        value={this.state.text}
        onSubmitEditing={(text)=>this.SearchFilterFunction()}
        underlineColorAndroid='transparent'
        placeholder="inspire,art,love,management,sports,life,love,funny,art"
            />
    
            <Text>{this.state.quote}</Text>
            <Text>- {this.state.author}</Text>
            <Text>- {this.state.logger}</Text>
        </View>
        );
    }
}
 
const styles = StyleSheet.create({
 
 MainContainer :{
 
  justifyContent: 'center',
  flex:1,
  margin: 7,
 
  },
 
 rowViewContainer: {
   fontSize: 17,
   padding: 10
  },
 
  TextInputStyleClass:{
        
   textAlign: 'left',
   height: 40,
   borderWidth: 1,
   borderColor: '#009688',
   borderRadius: 7 ,
   backgroundColor : "#FFFFFF"
        
   }
 
});
    
   
 