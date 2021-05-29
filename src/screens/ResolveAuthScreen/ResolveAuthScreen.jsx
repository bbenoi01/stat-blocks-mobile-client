import React, { Component } from 'react';
import {
    tryLocalSignin
} from '../actions';

export default class ResolveAuthScreen extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(tryLocalSignin());
    }

    render() {
        return (
            null
        );
    }
}