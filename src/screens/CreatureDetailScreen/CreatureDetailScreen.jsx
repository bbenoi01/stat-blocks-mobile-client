import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, ScrollView, ImageBackground, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import {
    Text,
    Divider,
    FAB,
    Overlay,
    ListItem,
    Input,
    Icon
} from 'react-native-elements';
import image from '../../../assets/parchment.jpg';

import {
    resetRoute,
    addCampaign,
    updateCampaign
} from '../actions';

export default class CreatureDetailScreen extends Component {

    state = {
        visible: false,
        name: '',
        monsters: []
    }

    handlevisible = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    handleClearRoute = () => {
        const { dispatch} = this.props;
        dispatch(resetRoute());
    }

    handleNameInput = (name) => {
        this.setState({
            name
        })
    }

    handleAddCampaign = (creature) => {
        const { dispatch } = this.props;
        const campaignData = {
            name: this.state.name,
            monsters: [
                ...this.state.monsters,
                creature
            ]
        }

        dispatch(addCampaign(campaignData));

        this.setState({
            visible: !this.state.visible,
            name: ''
        })
    }

    handleAddMonster = (creature, {item}) => {
        const { dispatch } = this.props;
        const campaignData = {
            id: item._id,
            monster: creature
        }

        dispatch(updateCampaign(campaignData));

        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        const { navigation, campaigns } = this.props;
        const creature = navigation.getParam('item');

        return (
            <View style={styles.container}>
                <NavigationEvents
                    onWillBlur={this.handleClearRoute}
                />
                <ImageBackground style={styles.background} source={image}>
                    {creature ? (
                        <>
                            <View style={styles.row}>
                                <Text h2>{creature.name}</Text>
                                <FAB title="Add to Campaign" onPress={this.handlevisible} color='black'/>

                                <Overlay overlayStyle={{ paddingTop: 15, paddingBottom: 10, maxHeight: '80%', width: 350 }} isVisible={this.state.visible} onBackdropPress={this.handlevisible}>
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
                                                                onPress={() => this.handleAddCampaign(creature)}
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
                                                    console.log(item);
                                                    return (
                                                        <TouchableOpacity
                                                            onPress={() => this.handleAddMonster(creature, {item})}
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
                                                            onPress={() => this.handleAddCampaign(creature)}
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
                                </Overlay>
                            </View>
                            <ScrollView>
                                <Text style={styles.lineOne}>{creature.size + " " + creature.type + " (" + creature.tag + "), " + creature.alignment}</Text>
                                <Divider style={{ height: 5, backgroundColor: 'blue' }}/>
                                <Text style={styles.category}>Armor Class: <Text>{creature.armorClass}</Text></Text>
                                <Text style={styles.category}>Hit Points: <Text>{creature.hitPoints}</Text></Text>
                                <Text style={styles.category}>Speed: <Text>{creature.speed}</Text></Text>
                                <Divider style={{ height: 5, backgroundColor: 'blue' }}/>
                                <View style={styles.row}>
                                    <View>
                                        <Text style={styles.statHead}>STR</Text>
                                        <Text>{creature.strength}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.statHead}>DEX</Text>
                                        <Text>{creature.dexterity}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.statHead}>CON</Text>
                                        <Text>{creature.constitution}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.statHead}>INT</Text>
                                        <Text>{creature.intelligence}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.statHead}>WIS</Text>
                                        <Text>{creature.wisdom}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.statHead}>CHA</Text>
                                        <Text>{creature.charisma}</Text>
                                    </View>
                                </View>
                                <Divider style={{ height: 5, backgroundColor: 'blue' }}/>
                                {creature.savingThrows.length > 0 ? ( <Text style={styles.category}>Saving Throws: <Text>{creature.savingThrows.map(sThrow => sThrow)}</Text></Text> ) : null}
                                {creature.skills.length > 0 ? ( <Text style={styles.category}>Skills: <Text>{creature.skills.map(skill => skill)}</Text></Text> ) : null}
                                {creature.vulnerabilities.length > 0 ? ( <Text style={styles.category}>Vulnerabilities: <Text>{creature.vulnerabilities.map(vulnerability => vulnerability)}</Text></Text> ) : null}
                                {creature.resistances.length > 0 ? ( <Text style={styles.category}>Resistances: <Text>{creature.resistances.map(resistance => resistance)}</Text></Text> ) : null}
                                {creature.immunities.length > 0 ? ( <Text style={styles.category}>Immunities: <Text>{creature.immunities.map(immunity => immunity)}</Text></Text> ) : null}
                                {creature.senses.length > 0 ? ( <Text style={styles.category}>Senses: <Text>{creature.senses.map(sense => sense)}</Text></Text> ) : null}
                                {creature.languages.length > 0 ? ( <Text style={styles.category}>Languages: <Text>{creature.languages.map(language => language)}</Text></Text> ) : null}
                                <Text style={styles.category}>Challenge: <Text>{creature.challenge + " (" + creature.experiencePoints + " XP)"}</Text></Text>
                                <Divider style={{ height: 5, backgroundColor: 'blue' }}/>
                                {creature.traits.length > 0 ? (
                                    <>
                                        {creature.traits.map(trait =>
                                            <View key={trait.trait}>
                                                <Text style={styles.category}>{trait.trait}<Text>{trait.description}</Text></Text>
                                            </View>
                                        )}
                                    </>
                                ) : null}
                                {creature.actions.length > 0 ? (
                                    <>
                                        <Text h4>Actions</Text>
                                        <Divider style={{ height: 5, backgroundColor: 'blue' }}/>
                                        {creature.actions.map(action =>
                                            <View key={action.action}>
                                                <Text style={styles.category}>{action.action}<Text>{action.description}</Text></Text>
                                            </View>
                                        )}
                                    </>
                                ) : null}
                                {creature.legendaryActions.length > 0 ? (
                                    <>
                                        <Text h4>Legendary Actions</Text>
                                        <Divider style={{ height: 5, backgroundColor: 'blue' }}/>
                                        {creature.legendaryActions.map(legendary =>
                                            <View key={legendary.action}>
                                                <Text style={styles.category}>{legendary.action}<Text>{legendary.description}</Text></Text>
                                            </View>
                                        )}
                                    </>
                                ) : null}
                                {creature.reactions.length > 0 ? (
                                    <>
                                        <Text h4>Reactions</Text>
                                        <Divider style={{ height: 5, backgroundColor: 'blue' }}/>
                                        {creature.reactions.map(reaction =>
                                            <View key={reaction.reaction}>
                                                <Text style={styles.category}>{reaction.reaction}<Text>{reaction.description}</Text></Text>
                                            </View>
                                        )}
                                    </>
                                ) : null}
                            </ScrollView>
                        </>
                    ) : null}
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
    },
    lineOne: {
        fontStyle: 'italic'
    },
    category: {
        fontWeight: 'bold'
    },
    row: {
        // alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    statHead: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    item: {
        marginBottom: 5,
        // maxHeight: '80%',
        // width: 300,
        // borderColor: 'red',
        // borderWidth: 5
    }
})