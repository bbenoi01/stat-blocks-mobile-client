import React, { Component, Fragment } from 'react';
import { Button } from 'react-native-elements';

import {
    signIn,
    signOut
} from '../../screens/actions';


export default class AuthBtn extends Component {

    handleSignIn = () => {
        const { dispatch } = this.props;
        dispatch(signIn());
    }

    handleSignOut = () => {
        const { dispatch } = this.props;
        dispatch(signOut());
    }

    render() {
        const { authenticated } = this.props;

        return (
            <Fragment>
                {authenticated === true ? (
                    <Button
                        title='Sign Out'
                        type='outline'
                        buttonStyle={{ borderColor: "red" }}
                        titleStyle={{ color: "red" }}
                        onPress={this.handleSignOut}
                    />
                ) : (
                    <Button
                        title='Sign In'
                        type='outline'
                        buttonStyle={{ borderColor: "#f5f5f5" }}
                        titleStyle={{ color: "#f5f5f5" }}
                        onPress={this.handleSignIn}
                    />
                )}
            </Fragment>
        );
    }
}