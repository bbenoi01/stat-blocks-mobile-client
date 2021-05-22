import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, ImageBackground, StyleSheet } from 'react-native';
import image from '../../../assets/parchment.jpg';
import CreatureList from '../../components/CreatureList';

import {
    getCreatures
} from '../actions';

export default class CreatureListScreen extends Component {

    handleGetCreatures = () => {
        const { dispatch } = this.props;
        dispatch(getCreatures());
    }

    render() {
        const { navigation, creatures } = this.props;

        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={image}>
                    {creatures.length === 0 ? (
                        <NavigationEvents
                            onWillFocus={this.handleGetCreatures}
                        />
                    ) : null}
                    <CreatureList
                        navigation={navigation}
                    />
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