import React, { Component } from 'react';
import { Icon } from 'react-native-elements';

export default class CoolBkBtn extends Component {

    handleListPress = () => {
        const { navigation } = this.props;
        navigation.navigate('List');
    }

    handleHomePress = () => {
        const { navigation } = this.props;
        navigation.navigate('Main');
    }

    render() {
        const { routeName } = this.props;
        
        return (
            <Icon
                name="hand-pointing-left"
                type="material-community"
                size={35}
                color="#f5f5f5"
                style={{ alignSelf: 'center' }}
                onPress={routeName === 'List Details' ? this.handleListPress : routeName === 'Home Details' ? this.handleHomePress : null}
            />
        );
    }
}