import AsyncStorage from '@react-native-async-storage/async-storage';
import { types } from '../types';
import creatureApi from '../api/creatureApi';
import { navigate } from '../navigationRef';

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
                    .then(() => {
                        navigate('homeFlow');
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
        navigate('Splash');
    }
}

export function tryLocalSignin() {
    return async (dispatch) => {
        const token = await AsyncStorage.getItem('token');

        if (token) {
            dispatch({
                type: types.SET_AUTHENTICATED
            });
            navigate('homeFlow');
        } else {
            navigate('Splash');
        }
    }
};

export function getCreatures() {
    return (dispatch) => {
        creatureApi.get('/creatures')
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: types.GET_CREATURES,
                        payload: res.data
                    })
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
};

export function resetRoute() {
    return (dispatch) => {
        dispatch({
            type: types.RESET_ROUTE
        })
    }
};

export function addCampaign(campaignData) {
    return (dispatch) => {
        creatureApi.post('/campaign', campaignData)
            .then(res => {
                if (res.status === 200) {
                    alert('Campaign added successfully');
                    getUserCampaigns();
                }
            })
            .catch(err => {
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err.response.data.error
                })
            })
    }
}

export function updateCampaign(campaignData) {
    const { id, monster } = campaignData;

    return (dispatch) => {
        creatureApi.put(`/campaign/${id}`, { monster })
            .then(res => {
                if (res.status === 200) {
                    alert('Campaign updated successfully');
                    getUserCampaigns();
                }
            })
            .catch(err => {
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err.response.data.error
                })
            })
    }
}

export function getUserCampaigns() {
    return (dispatch) => {
        creatureApi.get('/mycampaigns')
            .then(res => {
                dispatch({
                    type: types.GET_CAMPAIGNS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err.response.data.error
                })
            })
    }
}