/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from 'react';
import { StatusBar } from 'react-native';
import AppContainer from './scenes/AppNavigator';

export default class App extends Component {
  render() {
    return (
        <Fragment>
            <StatusBar 
                hidden={false} 
                animated 
                networkActivityIndicatorVisible={false}
                showHideTransition
                backgroundColor="darkgreen"
            />
            <AppContainer />
        </Fragment>
    );
  }
}
