import React from 'react';
import BBY from './app/app';

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
