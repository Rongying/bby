import React from 'react';
import BBY from './app/app';
import { Font } from 'expo';

function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'Roboto-Light': require('./app/assets/fonts/Roboto-Light.ttf'),
      'Roboto-Regular': require('./app/assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Medium': require('./app/assets/fonts/Roboto-Medium.ttf'),
      'Righteous-Regular': require('./app/assets/fonts/Righteous-Regular.ttf'),
    });
  }

  render() {
    let a = 'sss';

    return (
      <BBY
        onNavigationStateChange={(prevState, currentState) => {
          const currentScreen = getCurrentRouteName(currentState);
          const prevScreen = getCurrentRouteName(prevState);
    
          if (prevScreen !== currentScreen) {
            console.log(currentScreen);
          }
        }}
      />
    );
  }
}
