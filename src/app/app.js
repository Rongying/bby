import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import {
  StackNavigator
} from 'react-navigation';

export default class BBY extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Changes you make will tomatically reload?</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <RkButton>Click me!</RkButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
