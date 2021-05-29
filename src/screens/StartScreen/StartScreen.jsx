import React from 'react';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';
import image from '../../../assets/monster_manual.jpg';

// const { height, width } = Dimensions.get('window');

const StartScreen = () => {
    return (
        <ImageBackground style={styles.container} source={image}/>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    }
})

export default StartScreen;