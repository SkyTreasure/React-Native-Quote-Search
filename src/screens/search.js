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
    ScrollView,
    StatusBar
} from 'react-native';
import Tags from '../components/Tags';
import NewTagModal from '../components/NewTagModal';

var vquote = "";
var vauthor = "";

const TAGS = [
    '#photooftheday',
    '#friends',
    '#girl',
    '#fun',
    '#style',
    '#instalike',
    '#food',
    '#family',
    '#tagsforlikes',
    '#igers',
];



export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            text: '',
            quote: '',
            author: '',
            logger: '',
            hashtags: [],
            modalVisible: false,
        }
        this.arrayHolder = ['inspire', 'management', 'sports', 'life', 'love', 'funny', 'art']
    }



    // Reference Tags component
    _tagsComponent: ?Tags;

    openModal = (): void => {
        this.setState({ modalVisible: true });
    };

    closeModal = (): void => {
        this.setState({ modalVisible: false });
    };

    onSubmitNewTag = (tag: string) => {
        this._tagsComponent && this._tagsComponent.onSubmitNewTag(tag);
    };

    componentDidMount(prevProps, prevState, snapshot) {
        const { navigation } = this.props;
        this.setState({
            quote: navigation.getParam('quote', 'A'),
            author: navigation.getParam('author', 'B')
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
        const { modalVisible } = this.state;

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (

            <View style={styles.MainContainer}>
                <ScrollView>
                    <StatusBar
                        backgroundColor="blue"
                        barStyle="light-content"
                        hidden={true}
                    />

                    <NewTagModal
                        visible={this.state.modalVisible}
                        onSubmit={this.onSubmitNewTag}
                        onClose={this.closeModal}
                    />

                    <Text style={styles.Title}>Quote Search App</Text>
                    <TextInput
                        style={styles.TextInputStyleClass}
                        onChangeText={(text) => this.setState({ text: text })}
                        value={this.state.text}
                        onSubmitEditing={(text) => this.SearchFilterFunction()}
                        underlineColorAndroid='transparent'
                        placeholder="inspire,art,love,management,sports,life,love,funny,art"
                    />
                    <Tags
                        ref={component => this._tagsComponent = component }
                        tags={TAGS}
                        onPressAddNewTag={this.openModal}
                    />
                    <Text style={styles.Quote}>{this.state.quote}</Text>
                    <Text style={styles.Quote}>{this.state.author}</Text>
                    <Button
                        onPress={() => this.props.navigation.navigate('QuoteListing')}
                        title="View More Quotes "
                    />
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        backgroundColor: "#7ec0ee"

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


