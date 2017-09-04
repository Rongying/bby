import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import {
  StackNavigator
} from 'react-navigation';
import * as Screens from './screens';
import {bootstrap} from './config/bootstrap';
import {data} from './data'


bootstrap();
data.populateRealm();


const BBY = StackNavigator({
  Home: { screen: Screens.Exercises },
});

export default BBY;