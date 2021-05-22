import React, { Component } from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
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
                            <ListItem bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title>
                                        {item.name}
                                    </ListItem.Title>
                                    <ListItem.Subtitle>
                                        {item.size + " " + item.type + " (" + item.tag + "), " + item.alignment}
                                    </ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                            {/* <ListItem
                                title={item.name}
                                description={item.size + " " + item.type + " (" + item.tag + "), " + item.alignment}
                                style={{ borderWidth: 2, borderColor: 'black'}}
                            /> */}
                        </TouchableOpacity>
                    )
                }}
            />
        );
    }
}

const styles = StyleSheet.create({

})