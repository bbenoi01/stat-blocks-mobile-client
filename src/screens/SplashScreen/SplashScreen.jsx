import React from 'react';
import { View, Dimensions, ImageBackground, StyleSheet } from 'react-native';
import image from '../../../assets/monster_manual.jpg';

const { height, width } = Dimensions.get('window');

const SplashScreen = () => {
    return (
        <ImageBackground style={styles.container} source={image}/>
    );
};

const styles = StyleSheet.create({
    container: {
        height,
        width
    }
})

export default SplashScreen;