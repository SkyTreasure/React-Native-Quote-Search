import React, { Component } from 'react';

import {
    Text,
    StyleSheet,
    View,
    ListView,
    TextInput,
    ActivityIndicator,
    Alert,
    Button,
    StatusBar
} from 'react-native';

var vquote="";
var vauthor="";

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            text: '',
            quote: props.navigation.getParam('quote',''),
            author: props.navigation.getParam('author',''),
            logger: '',
            hashtags: []
        }
        this.arrayHolder = ['inspire', 'management', 'sports', 'life', 'love', 'funny', 'art']
    }

    componentWillMount() {
        const { navigation } = this.props; 
        this.setState({
            quote: navigation.getParam('quote',''),
            author: navigation.getParam('author','')
        })
    }

 

    GetListViewItem(fruit_name) {
        Alert.alert(fruit_name);
    }

    SearchFilterFunction() {

        if (this.arrayHolder.indexOf(this.state.text.toLowerCase()) > -1) {
            return fetch("http://quotes.rest/qod.json?category=" + this.state.text.toLowerCase())
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson.contents.quotes[0].quote); 
                    this.setState({
                        isLoading: false,
                        quote: responseJson.contents.quotes[0].quote,
                        author: "- " + responseJson.contents.quotes[0].author

                    });
                })
                .catch((error) => {
                    console.error(error);
                });

        } else {
            this.setState({
                quote: 'Please use either inspire,art,love,management,sports,life,love,funny,art'
            })
        }

    }




    render() {
         const { navigation } = this.props; 
          vquote = navigation.getParam('quote','');
          vauthor = navigation.getParam('author', '');
        
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (

            <View style={styles.MainContainer}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                    />
                <Text style={styles.Title}>Quote Search App</Text>
                <TextInput
                    style={styles.TextInputStyleClass}
                    onChangeText={(text) => this.setState({ text: text }) }
                    value={this.state.text}
                    onSubmitEditing={(text) => this.SearchFilterFunction() }
                    underlineColorAndroid='transparent'
                    placeholder="inspire,art,love,management,sports,life,love,funny,art"
                    />

                <Text style={styles.Quote}>{this.state.quote}</Text>
                <Text style={styles.Quote}>{this.state.author}</Text>
                <Text style={styles.Quote}>{vquote}</Text>
                <Text style={styles.Quote}>{vauthor}</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('QuoteListing') }
                    title="View More Quotes "
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        margin: 7,

    },

    TextInputStyleClass: {

        textAlign: 'left',
        height: 40,
        borderWidth: 1,
        borderColor: '#009688',
        borderRadius: 7,
        backgroundColor: "#FFFFFF"

    },
    Title: {
        textAlign: 'center',
        color: '#4CAF50',
        fontWeight: 'bold',
        fontSize: 24,
        paddingBottom: 10

    },
    Quote: {
        margin: 10,
        textAlign: 'left',
        fontSize: 24

    }

});


