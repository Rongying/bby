// import realm from './realm/realm'
// import populate from './dataGenerator'

// class DataProvider {
//   getExercises() {
//     return realm.objects('Exercise');
//   }

//   getExercise(id) {
//     return realm.objects('Exercise').filtered(`id=${id}`)[0];
//   }

//   getExerciseTypes() {
//     return realm.objects('ExerciseType');
//   }

//   populateRealm() {
//     populate();
//   }
// }

// export let data = new DataProvider();

import exerciseTypes from './raw/exerciseTypes'
import exercises from './raw/exercises'


class DataProvider {
  getExercises() {
    return exercises;
  }

  // getExercise(id) {
  //   return realm.objects('Exercise').filtered(`id=${id}`)[0];
  // }

  getExerciseTypes() {
    return exerciseTypes;
  }

  // populateRealm() {
  //   populate();
  // }
}

export let data = new DataProvider();