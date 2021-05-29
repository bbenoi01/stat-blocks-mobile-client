/* eslint-disable import/no-anonymous-default-export */
import { types } from './types';

const INITIAL_STATE = {
    userData: {},
    loading: true,
    authenticated: false,
    creatures: [],
    campaigns: [],
    errors: {},
    routeName: '',
    visible: false
};

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case (types.SET_AUTHENTICATED): {
            return {
                ...state,
                loading: false,
                authenticated: true
            }
        }

        case (types.SET_UNAUTHENTICATED): {
            return {
                userData: {},
                loading: true,
                authenticated: false,
                creatures: [],
                campaigns: [],
                errors: {},
                routeName: '',
                visible: false
            }
        }

        case (types.GET_CREATURES): {
            return {
                ...state,
                creatures: payload
            }
        }

        case (types.GET_CAMPAIGNS): {
            return {
                ...state,
                campaigns: payload
            }
        }

        case (types.UPDATE_ROUTE): {
            return {
                ...state,
                routeName: payload
            }
        }

        case (types.RESET_ROUTE): {
            return {
                ...state,
                routeName: ''
            }
        }

        case (types.TOGGLE_VISIBILITY): {
            return {
                ...state,
                visible: payload
            }
        }
        
        default: {
            return state;
        }
    }
};