/* eslint-disable import/no-anonymous-default-export */
import { types } from './types';

const INITIAL_STATE = {
    userData: {},
    loading: true,
    authenticated: false,
    creatures: [],
    errors: {},
    routeName: ''

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
                ...state,
                authenticated: false
            }
        }

        case (types.GET_CREATURES): {
            return {
                ...state,
                creatures: payload
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
        
        default: {
            return state;
        }
    }
};