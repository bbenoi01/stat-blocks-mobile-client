import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';
import rootStore from './src/rootStore';

import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import StartScreen from './src/screens/StartScreen';
import AppHeader from './src/components/AppHeader';
import HomeScreen from './src/screens/HomeScreen';
import CreatureListScreen from './src/screens/CreatureListScreen';
import AddCreatureScreen from './src/screens/AddCreatureScreen';
import CreatureDetailScreen from './src/screens/CreatureDetailScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { setNavigator } from './src/navigationRef';

const homeFlow = createStackNavigator({
  Home: createMaterialTopTabNavigator({
    Main: HomeScreen,
    MainDetails: CreatureDetailScreen
  },
  {
    swipeEnabled: false,
    tabBarOptions: {
      style: {
        display: 'none'
      }
    }
  })
},
{
  defaultNavigationOptions: {
    headerShown: false
  }
})

homeFlow.navigationOptions = () => {
  return {
    title: 'Home'
  }
}

const creatureFlow = createStackNavigator({
  Creatures: createMaterialTopTabNavigator({
    CreatureList: createMaterialTopTabNavigator({
      List: CreatureListScreen,
      ListDetails: CreatureDetailScreen
    },
    {
      swipeEnabled: false,
      tabBarOptions: {
        style: {
          display: 'none'
        }
      }
    }),
    AddCreature: AddCreatureScreen
  },
  {
    swipeEnabled: false
  })
},
{
  defaultNavigationOptions: {
    headerShown: false
  }
})

creatureFlow.navigationOptions = () => {
  return {
    title: 'Creatures'
  }
}

const settingsFlow = createStackNavigator({
  Settings: SettingsScreen
},
{
  defaultNavigationOptions: {
    headerShown: false
  }
})

settingsFlow.navigationOptions = () => {
  return {
    title: 'Settings'
  }
}



const switchNavigator = createSwitchNavigator({
  SBApp: createStackNavigator({
    ResolveAuth: ResolveAuthScreen,
    Start: StartScreen,
    bottomNav: createBottomTabNavigator({
      homeFlow,
      creatureFlow,
      settingsFlow
    },
    {
      tabBarOptions: {
        activeTintColor: 'purple',
        inactiveTintColor: 'grey',
        style: {
          backgroundColor: 'black'
        }
      }
    })
  },
  {
    defaultNavigationOptions: {
      header: props => <AppHeader {...props}/>
    }
  })
})

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={ rootStore }>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </Provider>
  );
};