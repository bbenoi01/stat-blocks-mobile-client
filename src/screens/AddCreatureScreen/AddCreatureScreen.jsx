import React, { Component } from 'react';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Surface } from 'react-native-paper';
import {
    Input,
    Icon,
    Button
} from 'react-native-elements';
import image from '../../../assets/parchment.jpg';

import {
    addCreature
} from '../actions';

export default class AddCreatureScreen extends Component {

    state = {
        name: '',
        size: '',
        type: '',
        tag: '',
        alignment: '',
        armorClass: '',
        hitPoints: '',
        speed: '',
        strength: '',
        dexterity: '',
        constitution: '',
        intelligence: '',
        wisdom: '',
        charisma: '',
        savingThrows: '',
        skillsInput: '',
        skills: [],
        vulnerabilitiesInput: '',
        vulnerabilities: [],
        resistancesInput: '',
        resistances: [],
        immunitiesInput: '',
        immunities: [],
        sensesInput: '',
        senses: [],
        languagesInput: '',
        languages: [],
        challenge: '',
        experiencePoints: null,
        traitsInput: '',
        traits: [],
        actionsInput: '',
        actions: [],
        reactionsInput: '',
        reactions: [],
        notes: ''
    }

    handleName = (name) => {
        this.setState({
            name
        })
    }

    handleSize = (size) => {
        this.setState({
            size
        })
    }

    handleType = (type) => {
        this.setState({
            type
        })
    }

    handleTag = (tag) => {
        this.setState({
            tag
        })
    }

    handleAlignment = (alignment) => {
        this.setState({
            alignment
        })
    }

    handleArmorClass = (armorClass) => {
        this.setState({
            armorClass
        })
    }

    handleHP = (hitPoints) => {
        this.setState({
            hitPoints
        })
    }

    handleSpeed = (speed) => {
        this.setState({
            speed
        })
    }

    handleStrength = (strength) => {
        this.setState({
            strength
        })
    }

    handleDexterity = (dexterity) => {
        this.setState({
            dexterity
        })
    }

    handleConstitution = (constitution) => {
        this.setState({
            constitution
        })
    }

    handleIntelligence = (intelligence) => {
        this.setState({
            intelligence
        })
    }

    handleWisdom = (wisdom) => {
        this.setState({
            wisdom
        })
    }

    handleCharisma = (charisma) => {
        this.setState({
            charisma
        })
    }

    handleSavingThrows = (savingThrows) => {
        this.setState({
            savingThrows
        })
    }

    handleSkillsInput = (skillsInput) => {
        this.setState({
            skillsInput
        })
    }

    handleSkillAdd = () => {
        this.setState({
            skills: [
                ...this.state.skills,
                this.state.skillsInput
            ],
            skillsInput: ''
        })
    }

    handleVulInput = (vulnerabilitiesInput) => {
        this.setState({
            vulnerabilitiesInput
        })
    }

    handleVulAdd = () => {
        this.setState({
            vulnerabilities: [
                ...this.state.vulnerabilities,
                this.state.vulnerabilitiesInput
            ],
            vulnerabilitiesInput: ''
        })
    }

    handleResistancesInput = (resistancesInput) => {
        this.setState({
            resistancesInput
        })
    }

    handleResistanceAdd = () => {
        this.setState({
            resistances: [
                ...this.state.resistances,
                this.state.resistancesInput
            ],
            resistancesInput: ''
        })
    }

    handleImmunitiesInput = (immunitiesInput) => {
        this.setState({
            immunitiesInput
        })
    }

    handleImmunityAdd = () => {
        this.setState({
            immunities: [
                ...this.state.immunities,
                this.state.immunitiesInput
            ],
            immunitiesInput: ''
        })
    }

    handleSensesInput = (sensesInput) => {
        this.setState({
            sensesInput
        })
    }

    handleSenseAdd = () => {
        this.setState({
            senses: [
                ...this.state.senses,
                this.state.sensesInput
            ],
            sensesInput: ''
        })
    }

    handleLanguagesInput = (languagesInput) => {
        this.setState({
            languagesInput
        })
    }

    handleLanguageAdd = () => {
        this.setState({
            languages: [
                ...this.state.languages,
                this.state.languagesInput
            ],
            languagesInput: ''
        })
    }

    handleChallenge = (challenge) => {
        this.setState({
            challenge
        })
    }

    handleEXP = (experiencePoints) => {
        this.setState({
            experiencePoints
        })
    }

    handleTraitsInput = (traitsInput) => {
        this.setState({
            traitsInput
        })
    }

    handleTraitAdd = () => {
        this.setState({
            traits: [
                ...this.state.traits,
                this.state.traitsInput
            ],
            traitsInput: ''
        })
    }

    handleActionsInput = (actionsInput) => {
        this.setState({
            actionsInput
        })
    }

    handleActionAdd = () => {
        this.setState({
            actions: [
                ...this.state.actions,
                this.state.actionsInput
            ],
            actionsInput: ''
        })
    }

    handleReactionsInput = (reactionsInput) => {
        this.setState({
            reactionsInput
        })
    }

    handleReactionAdd = () => {
        this.setState({
            reactions: [
                ...this.state.reactions,
                this.state.reactionsInput
            ],
            reactionsInput: ''
        })
    }

    handleNotes = (notes) => {
        this.setState({
            notes
        })
    }
    
    handleSubmit = () => {
        const { dispatch } = this.props;
        const newCreature = {
            name: this.state.name,
            size: this.state.size,
            type: this.state.type,
            tag: this.state.tag,
            alignment: this.state.alignment,
            armorClass: this.state.armorClass,
            hitPoints: this.state.hitPoints,
            speed: this.state.speed,
            strength: this.state.strength,
            dexterity: this.state.dexterity,
            constitution: this.state.constitution,
            intelligence: this.state.intelligence,
            wisdom: this.state.wisdom,
            charisma: this.state.charisma,
            savingThrows: this.state.savingThrows,
            skills: this.state.skills,
            vulnerabilities: this.state.vulnerabilities,
            resistances: this.state.resistances,
            immunities: this.state.immunities,
            senses: this.state.senses,
            languages: this.state.languages,
            challenge: this.state.challenge,
            experiencePoints: parseInt(this.state.experiencePoints),
            traits: this.state.traits,
            actions: this.state.actions,
            reactions: this.state.reactions,
            notes: this.state.notes
        };

        dispatch(addCreature(newCreature));
        this.setState({
            name: '',
            size: '',
            type: '',
            tag: '',
            alignment: '',
            armorClass: '',
            hitPoints: '',
            speed: '',
            strength: '',
            dexterity: '',
            constitution: '',
            intelligence: '',
            wisdom: '',
            charisma: '',
            savingThrows: '',
            skillsInput: '',
            skills: [],
            vulnerabilitiesInput: '',
            vulnerabilities: [],
            resistancesInput: '',
            resistances: [],
            immunitiesInput: '',
            immunities: [],
            sensesInput: '',
            senses: [],
            languagesInput: '',
            languages: [],
            challenge: '',
            experiencePoints: null,
            traitsInput: '',
            traits: [],
            actionsInput: '',
            actions: [],
            reactionsInput: '',
            reactions: [],
            notes: ''
        })
    }

    render() {
        const {
            name,
            size,
            type,
            tag,
            alignment, 
            armorClass,
            hitPoints,
            speed,
            strength,
            dexterity,
            constitution,
            intelligence,
            wisdom,
            charisma,
            savingThrows,
            skillsInput,
            skills,
            vulnerabilitiesInput,
            vulnerabilities,
            resistancesInput,
            resistances,
            immunitiesInput,
            immunities,
            sensesInput,
            senses,
            languagesInput,
            languages,
            challenge,
            experiencePoints,
            traitsInput,
            traits,
            actionsInput,
            actions,
            reactionsInput,
            reactions,
            notes
        } = this.state;

        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={image}>
                    <ScrollView>
                        <Text>
                            Add Creature Screen
                        </Text>
                        <View style={styles.multiRow}>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Name'
                                    placeholderTextColor='black'
                                    value={name}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleName}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Picker
                                    selectedValue={size}
                                    style={styles.picker}
                                    onValueChange={this.handleSize}
                                > 
                                    <Picker.Item label='Size' value='Choose One'/>
                                    <Picker.Item label='Tiny' value='Tiny'/>
                                    <Picker.Item label='Small' value='Small'/>
                                    <Picker.Item label='Medium' value='Medium'/>
                                    <Picker.Item label='Large' value='Large'/>
                                    <Picker.Item label='Huge' value='Huge'/>
                                    <Picker.Item label='Gargantuan' value='Gargantuan'/>
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.multiRow}>
                            <View style={{ flex: 1 }}>
                                <Picker
                                    selectedValue={type}
                                    style={styles.picker}
                                    onValueChange={this.handleType}
                                >
                                    <Picker.Item label='Type' value='Choose One'/>
                                    <Picker.Item label='Aberration' value='Aberration'/>
                                    <Picker.Item label='Beast' value='Beast'/>
                                    <Picker.Item label='Celestial' value='Celestial'/>
                                    <Picker.Item label='Construct' value='Construct'/>
                                    <Picker.Item label='Dragon' value='Dragon'/>
                                    <Picker.Item label='Elemental' value='Elemental'/>
                                    <Picker.Item label='Fey' value='Fey'/>
                                    <Picker.Item label='Fiend' value='Fiend'/>
                                    <Picker.Item label='Giant' value='Giant'/>
                                    <Picker.Item label='Humanoid' value='Humanoid'/>
                                    <Picker.Item label='Monstrosity' value='Monstrosity'/>
                                    <Picker.Item label='Ooze' value='Ooze'/>
                                    <Picker.Item label='Plant' value='Plant'/>
                                    <Picker.Item label='Undead' value='Undead'/>
                                </Picker>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Tag'
                                    value={tag}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleTag}
                                />
                            </View>
                        </View>
                        <View style={styles.multiRow}>
                            <View style={{ flex: 1 }}>
                                <Picker
                                    selectedValue={alignment}
                                    style={styles.picker}
                                    onValueChange={this.handleAlignment}
                                >
                                    <Picker.Item label='Alignment' value='Choose One'/>
                                    <Picker.Item label='Lawful Good' value='Lawful Good'/>
                                    <Picker.Item label='Neutral Good' value='Neutral Good'/>
                                    <Picker.Item label='Chaotic Good' value='Chaotic Good'/>
                                    <Picker.Item label='Lawful Neutral' value='Lawful Neutral'/>
                                    <Picker.Item label='Neutral' value='Neutral'/>
                                    <Picker.Item label='Chaotic Neutral' value='Chaotic Neutral'/>
                                    <Picker.Item label='Lawful Evil' value='Lawful Evil'/>
                                    <Picker.Item label='Neutral Evil' value='Neutral Evil'/>
                                    <Picker.Item label='Chaotic Evil' value='Chaotic Evil'/>
                                </Picker>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Armor Class'
                                    value={armorClass}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleArmorClass}
                                />
                            </View>
                        </View>
                        <View style={styles.multiRow}>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Hit Points'
                                    value={hitPoints}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleHP}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Speed'
                                    value={speed}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleSpeed}
                                />
                            </View>
                        </View>
                        <View style={styles.multiRow}>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Strength'
                                    value={strength}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleStrength}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Dexterity'
                                    value={dexterity}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleDexterity}
                                />
                            </View>
                        </View>
                        <View style={styles.multiRow}>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Constitution'
                                    value={constitution}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleConstitution}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Intelligence'
                                    value={intelligence}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleIntelligence}
                                />
                            </View>
                        </View>
                        <View style={styles.multiRow}>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Wisdom'
                                    value={wisdom}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleWisdom}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Charisma'
                                    value={charisma}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleCharisma}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Saving Throws'
                                    value={savingThrows}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleSavingThrows}
                                />
                            </View>
                        </View>
                        <View style={styles.multiRow}>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Skills'
                                    value={skillsInput}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleSkillsInput}
                                    rightIcon={
                                        <Icon
                                            name='add'
                                            onPress={this.handleSkillAdd}
                                        />
                                    }
                                />
                                <Surface
                                    style={styles.surface}
                                >
                                    <Text>
                                        {skills.map(skill => skill + ', ')}
                                    </Text>
                                </Surface>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Vulnerabilities'
                                    value={vulnerabilitiesInput}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleVulInput}
                                    rightIcon={
                                        <Icon
                                            name='add'
                                            onPress={this.handleVulAdd}
                                        />
                                    }
                                />
                                <Surface
                                    style={styles.surface}
                                >
                                    <Text>
                                        {vulnerabilities.map(vulnerability => vulnerability + ', ')}
                                    </Text>
                                </Surface>
                            </View>
                        </View>
                        <View style={styles.multiRow}>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Resistances'
                                    value={resistancesInput}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleResistancesInput}
                                    rightIcon={
                                        <Icon
                                            name='add'
                                            onPress={this.handleResistanceAdd}
                                        />
                                    }
                                />
                                <Surface
                                    style={styles.surface}
                                >
                                    <Text>
                                        {resistances.map(resistance => resistance + ', ')}
                                    </Text>
                                </Surface>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Immunities'
                                    value={immunitiesInput}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleImmunitiesInput}
                                    rightIcon={
                                        <Icon
                                            name='add'
                                            onPress={this.handleImmunityAdd}
                                        />
                                    }
                                />
                                <Surface
                                    style={styles.surface}
                                >
                                    <Text>
                                        {immunities.map(immunity => immunity + ', ')}
                                    </Text>
                                </Surface>
                            </View>
                        </View>
                        <View style={styles.multiRow}>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Senses'
                                    value={sensesInput}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleSensesInput}
                                    rightIcon={
                                        <Icon
                                            name='add'
                                            onPress={this.handleSenseAdd}
                                        />
                                    }
                                />
                                <Surface
                                    style={styles.surface}
                                >
                                    <Text>
                                        {senses.map(sense => sense + ', ')}
                                    </Text>
                                </Surface>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Languages'
                                    value={languagesInput}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleLanguagesInput}
                                    rightIcon={
                                        <Icon
                                            name='add'
                                            onPress={this.handleLanguageAdd}
                                        />
                                    }
                                />
                                <Surface
                                    style={styles.surface}
                                >
                                    <Text>
                                        {languages.map(language => language + ', ')}
                                    </Text>
                                </Surface>
                            </View>
                        </View>
                        <View style={styles.multiRow}>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Challenge'
                                    value={challenge}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleChallenge}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='EXP'
                                    value={experiencePoints}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleEXP}
                                />
                            </View>
                        </View>
                        <View style={styles.multiRow}>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Traits'
                                    value={traitsInput}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleTraitsInput}
                                    rightIcon={
                                        <Icon
                                            name='add'
                                            onPress={this.handleTraitAdd}
                                        />
                                    }
                                />
                                <Surface
                                    style={styles.surface}
                                >
                                    <Text>
                                        {traits.map(trait => trait + ', ')}
                                    </Text>
                                </Surface>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Actions'
                                    value={actionsInput}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleActionsInput}
                                    rightIcon={
                                        <Icon
                                            name='add'
                                            onPress={this.handleActionAdd}
                                        />
                                    }
                                />
                                <Surface
                                    style={styles.surface}
                                >
                                    <Text>
                                        {actions.map(action => action + ', ')}
                                    </Text>
                                </Surface>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Reactions'
                                    value={reactionsInput}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleReactionsInput}
                                    rightIcon={
                                        <Icon
                                            name='add'
                                            onPress={this.handleReactionAdd}
                                        />
                                    }
                                />
                                <Surface
                                    style={styles.surface}
                                >
                                    <Text>
                                        {reactions.map(reaction => reaction + ', ')}
                                    </Text>
                                </Surface>
                            </View>
                        </View>
                        <View style={styles.multiRow}>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder='Notes'
                                    value={notes}
                                    multiline
                                    numberOfLines={5}
                                    style={styles.multiRowInput}
                                    onChangeText={this.handleNotes}
                                />
                            </View>
                        </View>
                        <View style={styles.multiRowx}>
                            <Button
                                title='Submit'
                                mode='contained'
                                style={{ marginVertical: 10 }}
                                onPress={this.handleSubmit}
                            />
                        </View>
                    </ScrollView>
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
    multiRow: {
        flexDirection: 'row'

    },
    multiRowx: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center'
    },
    multiRowInput: {
        flex: 1,
        // backgroundColor: 'transparent', 
    },
    textBox: {
        flex: 1,
        height: 100,
        borderColor: 'black',
        borderWidth: 2
    },
    picker: {
        alignSelf: 'stretch',
        height: 40
    },
    surface: {
        flex: 1,
        padding: 8,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        borderColor: 'black',
        borderWidth: 1
    }
})