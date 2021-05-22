import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import {
    Header,
    Text
} from 'react-native-elements';
import CoolBkBtn from '../CoolBkBtn';
import AuthBtn from '../AuthBtn';

export default class AppHeader extends Component {
    render() {
        const { navigation, routeName } = this.props;

        return (
            <Header
                leftComponent={routeName === 'List Details' ? <CoolBkBtn navigation={navigation}/> : null}
                centerComponent={<Text h3 style={{ color: "#f5f5f5" }}>Stat Blocks</Text>}
                rightComponent={<AuthBtn />}
                containerStyle={{ backgroundColor: 'black' }}
            />
        );
    }
}