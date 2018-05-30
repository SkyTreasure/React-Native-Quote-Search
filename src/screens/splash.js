import React, {Component} from 'react'
import { createStackNavigator } from 'react-navigation';
import {
    Button,
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar
} from 'react-native';

export default class Splash extends Component{
   
   constructor(props){ 
    super(props); 
    StatusBar.setHidden(true);
    this.state={ 
      isVisible : true, 
    } 
  }
 
 
  componentDidMount(){
 
    var that = this; 
    setTimeout(function(){ 
      that.props.navigation.navigate('Onboarding');
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
                        <Image source={{uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/496ecb14589707.562865d064f9e.png'}}
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
        margin: 0,
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
        margin: 0,
    } 
});
 