import realm from './realm/realm'
import populate from './dataGenerator'

class DataProvider {
  getExercises() {
    return realm.objects('Exercise');
  }

  getExercise(id) {
    return realm.objects('Exercise').filtered(`id=${id}`)[0];
  }

  getExerciseTypes() {
    return realm.objects('ExerciseType');
  }

  populateRealm() {
    populate();
  }
}

export let data = new DataProvider();