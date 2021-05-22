import React, { Component } from 'react';
import { View, ImageBackground, ScrollView, Text, StyleSheet } from 'react-native';

import image from '../../../assets/parchment.jpg';

export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={image}>
                    <ScrollView>
                        <Text>
                            Settings Screen
                        </Text>
                    </ScrollView>
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
        justifyContent: "center"
    }
})