import AsyncStorage from '@react-native-async-storage/async-storage';
import { types } from '../types';
import creatureApi from '../api/creatureApi';

export function signIn() {
    const email = "admin@admin.com";
    const password = "admin123";
    return (dispatch) => {
        creatureApi.post('/signin', { email, password })
            .then(async res => {
                if (res.status === 200) {
                    await AsyncStorage.setItem('token', res.data.token);
                    dispatch({
                        type: types.SET_AUTHENTICATED
                    })
                }
            })
            .then(() => {
                creatureApi.get('/mycampaigns')
                    .then(res => {
                        console.log('Campaigns', res.data);
                        dispatch({
                            type: types.GET_CAMPAIGNS,
                            payload: res.data
                        })
                    })

            })
            .catch(err => {
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err.response.data.error
                })
            })
    }
};

export function signOut() {
    return async (dispatch) => {
        dispatch({
            type: types.SET_UNAUTHENTICATED
        })
        await AsyncStorage.removeItem('token');
    }
}

export function getCreatures() {
    return (dispatch) => {
        creatureApi.get('/creatures')
            .then(res => {
                if (res.status === 200) {
                    alert('Creatures are upon us!');
                    // console.log('Got creatures', res.data);
                    dispatch({
                        type: types.GET_CREATURES,
                        payload: res.data
                    })
                } else {
                    alert("It's quiet, too quiet...")
                }
            })
            .catch(err => {
                // console.log('ERROR', err);
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err.response.data.error
                })
            })
    }
}

export function addCreature(newCreature) {
    return (dispatch) => {
        creatureApi.post('/creature', newCreature)
            .then(res => {
                if (res.status === 200) {
                    alert('Creature added successfully')
                } else {
                    alert('Creature not added, something went wrong')
                }
            })
            .catch(err => {
                // console.log('ERROR', err);
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err.response.data.error
                })
            })
    }
};

export function updateRoute(routeName) {
    return (dispatch) => {
        dispatch({
            type: types.UPDATE_ROUTE,
            payload: routeName
        })
    }
}

export function resetRoute() {
    return (dispatch) => {
        dispatch({
            type: types.RESET_ROUTE
        })
    }
}