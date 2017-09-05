import * as Screens from '../../screens/index';
import _ from 'lodash';

export const MainRoutes = [
  {
    id: 'Exercises',
    title: 'Exercises',
    screen: Screens.Exercises,
    children: []
  },
  {
    id: 'ExerciseTypes',
    title: 'Exercise Types',
    screen: Screens.ExerciseTypes,
    children: []
  },
];

let menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
  id: 'ExerciseTypes',
  title: 'Exercise Types',
  screen: Screens.ExerciseTypes,
  children: []
},);

export const MenuRoutes = menuRoutes;
