import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import OnboardingButton from '../components/OnboardingButton';
import Swiper from '../components/Swiper';

import {
  StyleSheet,   // CSS-like styles
  Text,         // Renders text
  View          // Container component
} from 'react-native';

export default class Screens extends Component {
  render() {
    return (
      <Swiper>
        {/* First screen */}
        <View style={[styles.slide, { backgroundColor: '#C04DEE' }]}>
            <Icon name="md-quote" {...iconStyles} />
            <Text style={styles.header}>Infinite Quotes</Text>
            <Text style={styles.text}>We have loads and loads of quotes</Text>
        </View>
        {/* Second screen */}
        <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
            <Icon name="ios-search-outline" {...iconStyles} />
            <Text style={styles.header}>Search</Text>
            <Text style={styles.text}>Search for quotes</Text>
        </View>
        {/* Third screen */}
        <View style={[styles.slide, { backgroundColor: '#FC515B' }]}>
            <Icon name="ios-heart" {...iconStyles} />
            <Text style={styles.header}>LOVE</Text>
            <Text style={styles.text}>Where there is love there is life</Text>
        </View>
    </Swiper>
    );
  }
}
const iconStyles = {
  size: 100,
  color: '#FFFFFF',
}; 
const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1,                    // Take up all screen
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',       // Center horizontally
  },
  // Header styles
  header: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  // Text below header
  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
  },
});