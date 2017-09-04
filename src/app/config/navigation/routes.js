import * as Screens from '../../screens/index';
import _ from 'lodash';

export const MainRoutes = [
  {
    id: 'Exercises',
    title: 'Exercises',
    screen: Screens.Exercises,
    children: []
  }
];

let menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
  id: 'Exercises',
  title: 'Exercises',
  screen: Screens.Exercises,
  children: []
},);

export const MenuRoutes = menuRoutes;