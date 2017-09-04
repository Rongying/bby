import React from 'react';
import _ from 'lodash';
import {StackNavigator} from 'react-navigation'
import {withRkTheme} from 'react-native-ui-kitten'
import transition from './transitions';
import {
  MainRoutes,
  MenuRoutes
} from './routes';

let main = {};
let flatRoutes = {};
(MenuRoutes).map(function (route, index) {

  let wrapToRoute = (route) => {
    return {
      screen: withRkTheme(route.screen),
      title: route.title
    }
  };

  flatRoutes[route.id] = wrapToRoute(route);
  main[route.id] = wrapToRoute(route);
  for (let child of route.children) {
    flatRoutes[child.id] = wrapToRoute(child);
  }
});