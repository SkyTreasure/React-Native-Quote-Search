import React, { Component } from 'react';
import {
  ListView,       // Renders a list
  RefreshControl,
  Navigator,    // Allows to navigate between different screens
  StatusBar,    // Allows to hide the status bar
  Text
} from 'react-native';

import SampleList from '../SampleList';

export default class QuoteListing extends Component {
    componentDidMount() {
        // Hide the status bar
        StatusBar.setHidden(true);
    }
    
    render(){
        return ( 
            <SampleList />

        );
    }
}