import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, ImageBackground, StyleSheet } from 'react-native';
import {
    Text,
    Divider
} from 'react-native-elements';
import image from '../../../assets/parchment.jpg';

import {
    resetRoute
} from '../actions';

export default class CreatureDetailScreen extends Component {

    handleClearRoute = () => {
        const { dispatch} = this.props;
        dispatch(resetRoute());
    }

    render() {
        const { navigation } = this.props;
        const creature = navigation.getParam('item');
        console.log('Its a monster!', creature);

        return (
            <View style={styles.container}>
                <NavigationEvents
                    onWillBlur={this.handleClearRoute}
                />
                <ImageBackground style={styles.background} source={image}>
                    {creature ? (
                        <View>
                            <Text h1>{creature.name}</Text>
                            <Text style={styles.lineOne}>{creature.size + " " + creature.type + " (" + creature.tag + "), " + creature.alignment}</Text>
                            <Divider style={{ height: 5, backgroundColor: 'blue' }}/>
                            <Text h4>Armor Class: {creature.armorClass}</Text>
                            <Text h4>Hit Points: {creature.hitPoints}</Text>
                            <Text h4>Speed: {creature.speed}</Text>
                            <Divider style={{ height: 5, backgroundColor: 'blue' }}/>
                            <View style={styles.statRow}>
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
                            {creature.savingThrows.length > 0 ? ( <Text h4>Saving Throws: {creature.savingThrows.map(sThrow => sThrow)}</Text> ) : null}
                            {creature.skills.length > 0 ? ( <Text h4>Skills: {creature.skills.map(skill => skill)}</Text> ) : null}
                            {creature.vulnerabilities.length > 0 ? ( <Text h4>Vulnerabilities: {creature.vulnerabilities.map(vulnerability => vulnerability)}</Text> ) : null}
                            {creature.resistances.length > 0 ? ( <Text h4>Resistances: {creature.resistances.map(resistance => resistance)}</Text> ) : null}
                            {creature.immunities.length > 0 ? ( <Text h4>Immunities: {creature.immunities.map(immunity => immunity)}</Text> ) : null}
                            {creature.senses.length > 0 ? ( <Text h4>Senses: {creature.senses.map(sense => sense)}</Text> ) : null}
                            {creature.languages.length > 0 ? ( <Text h4>Languages: {creature.languages.map(language => language)}</Text> ) : null}
                            <Text h4>Challenge: {creature.challenge + " (" + creature.experiencePoints + " XP)"}</Text>
                            <Divider style={{ height: 5, backgroundColor: 'blue' }}/>
                        </View>
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
    statRow: {
        // alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    statHead: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
})