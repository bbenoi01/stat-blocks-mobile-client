import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import image from '../../../assets/parchment.jpg';

import {
    resetRoute
} from '../actions';

export default class CreatureDetailScreen extends Component {

    handleClearRoute = () => {
        const { dispatch} = this.props;
        dispatch(resetRoute());
    }

    render() {
        const { navigation } = this.props;
        const creature = navigation.getParam('item');
        console.log('Its a monster!', creature);

        return (
            <View style={styles.container}>
                <NavigationEvents
                    onWillBlur={this.handleClearRoute}
                />
                <ImageBackground style={styles.background} source={image}>
                    {creature ? (
                        <Text>{creature._id}</Text>
                    ) : null}
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center"
    }
})