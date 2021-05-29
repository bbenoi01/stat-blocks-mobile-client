import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

import image from '../../../assets/parchment.jpg';
import CreatureList from '../../components/CreatureList';

export default class CampaignScreen extends Component {
    render() {
        const { navigation } = this.props;
        const monsters = navigation.getParam('monsters');

        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={image}>
                    <CreatureList creatures={monsters}/>
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