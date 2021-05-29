import React, { Component } from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { navigate } from '../../navigationRef';
import {
    ListItem,
    Input,
    Icon
} from 'react-native-elements';

import {
    addCampaign,
    updateCampaign,
    toggleVisibility
} from '../../screens/actions';

export default class CampaignList extends Component {

    state = {
        name: '',
        monsters: []
    }

    handleNameInput = (name) => {
        this.setState({
            name
        })
    }

    handleAddCampaign = (creature) => {
        const { dispatch, visible } = this.props;
        const campaignData = {
            name: this.state.name,
            monsters: [
                ...this.state.monsters,
                creature
            ]
        };
        const visibility = !visible;

        dispatch(addCampaign(campaignData));
        this.setState({
            name: ''
        });
        dispatch(toggleVisibility(visibility));
    }

    handleAddBlankCampaign = () => {
        const { dispatch } = this.props;
        const campaignData = {
            name: this.state.name,
            monsters: []
        }

        dispatch(addCampaign(campaignData));
        this.setState({
            name: ''
        })
    }

    handleAddMonster = (creature, {item}) => {
        const { dispatch, visible } = this.props;
        const campaignData = {
            id: item._id,
            monster: creature
        };
        const visibility = !visible;

        dispatch(updateCampaign(campaignData));
        this.setState({
            monsters: []
        });
        dispatch(toggleVisibility(visibility));
    }

    render() {
        const { navigation, campaigns, creature } = this.props;

        return (
            <>
                {campaigns.length > 0 ? (
                    <>
                        <ListItem
                            bottomDivider
                            style={styles.item}
                        >
                            <ListItem.Content>
                                <Input
                                    placeholder='Create New'
                                    value={this.state.name}
                                    onChangeText={this.handleNameInput}
                                    rightIcon={
                                        <TouchableOpacity
                                            onPress={creature ? () => this.handleAddCampaign(creature) : this.handleAddBlankCampaign}
                                        >
                                            <Icon
                                                name='add'
                                                size={24}
                                                color='black'
                                            />
                                        </TouchableOpacity>
                                    }
                                />
                            </ListItem.Content>
                        </ListItem>
                        <FlatList
                            data={campaigns}
                            keyExtractor={item => item._id}
                            renderItem={({item}) => {
                                const monsters = item.monsters;
                                return (
                                    <TouchableOpacity
                                        onPress={creature ? () => this.handleAddMonster(creature, {item}) : () => navigate('Campaign', {monsters}) }
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
                                                    Number of monsters: {item.monsters.length}
                                                </ListItem.Subtitle>
                                                <ListItem.Subtitle>
                                                    {item.created}
                                                </ListItem.Subtitle>
                                            </ListItem.Content>
                                        </ListItem>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </>
                ) : (
                    <ListItem
                        bottomDivider
                        style={styles.item}
                    >
                        <ListItem.Content>
                            <Input
                                placeholder='Create New'
                                value={this.state.name}
                                onChangeText={this.handleNameInput}
                                rightIcon={
                                    <TouchableOpacity
                                        onPress={creature ? () => this.handleAddCampaign(creature) : this.handleAddBlankCampaign}
                                    >
                                        <Icon
                                            name='add'
                                            size={24}
                                            color='black'
                                        />
                                    </TouchableOpacity>
                                }
                            />
                        </ListItem.Content>
                    </ListItem>
                )}
            </>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        marginBottom: 5,
        // maxHeight: '80%',
        // width: 300,
        // borderColor: 'red',
        // borderWidth: 5
    }
})