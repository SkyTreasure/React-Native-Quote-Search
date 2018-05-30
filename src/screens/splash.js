import React, {Component} from 'react'
import { createStackNavigator } from 'react-navigation';
import {
    Button,
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

export default class Splash extends Component{
   
   constructor(props){ 
    super(props); 
    this.state={ 
      isVisible : true, 
    } 
  }
 
 
  componentDidMount(){
 
    var that = this; 
    setTimeout(function(){ 
      that.props.navigation.navigate('Home');
    }, 3000);  
  }
 
    render()
    {
        const { navigate } = this.props.navigation;
         
 
        return(
 
            <View style = { styles.MainContainer }> 
                <View style={styles.SplashScreen_RootView}> 
                    <View style={styles.SplashScreen_ChildView}> 
                        {/* Put all your components Image and Text here inside Child view which you want to show in Splash Screen. */}
                        <Image source={{uri: 'https://reactnativecode.com/wp-content/uploads/2018/01/welcome.png'}}
                        style={{width:'100%', height: '100%', resizeMode: 'contain'}} />
                    </View>            
                 </View>
            </View>
            
        );
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'  
    },
 
    SplashScreen_RootView:
    {
        justifyContent: 'center',
        flex:1,
        margin: 10,
        position: 'absolute',
        width: '100%',
        height: '100%',
        
    },
 
    SplashScreen_ChildView:
    {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BCD4',
        flex:1,
        margin: 20,
    } 
});
 