import React, { Component } from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

import {
    updateRoute
} from '../../screens/actions';

export default class CreatureList extends Component {

    handlePress = (item) => {
        const { navigation, dispatch } = this.props;
        navigation.navigate('ListDetails', { item });
        dispatch(updateRoute('List Details'));
    }

    render() {
        const { creatures } = this.props;

        return (
            <FlatList
                data={creatures}
                keyExtractor={item => item._id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => this.handlePress(item)}
                        >
                            <ListItem
                                bottomDivider
                                style={styles.item}
                            >
                                    <ListItem.Content>
                                        <ListItem.Title>
                                            {item.name}
                                        </ListItem.Title>
                                        <ListItem.Subtitle>
                                            {item.size + " " + item.type + " (" + item.tag + "), " + item.alignment}
                                        </ListItem.Subtitle>
                                    </ListItem.Content>
                            </ListItem>
                        </TouchableOpacity>
                    )
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    item: {
        marginTop: 5
    }
})