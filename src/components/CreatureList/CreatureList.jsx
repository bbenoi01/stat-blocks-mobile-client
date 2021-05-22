import React, { Component } from 'react';
import { FlatList, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

import {
    updateRoute
} from '../../screens/actions';

export default class CreatureList extends Component {

    render() {
        const { creatures, navigation, dispatch } = this.props;

        function handlePress(item) {
            navigation.navigate('ListDetails', { item });
            dispatch(updateRoute('List Details'));
        }

        return (
            <FlatList
                data={creatures}
                keyExtractor={item => item._id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => handlePress(item)}
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