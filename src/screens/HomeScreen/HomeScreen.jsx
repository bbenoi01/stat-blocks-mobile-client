import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

import image from '../../../assets/parchment.jpg';
import CampaignList from '../../components/CampaignList';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={image}>
                    <CampaignList />
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