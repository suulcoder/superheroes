import { fork, all } from 'redux-saga/effects';

import { 
  watchFetchSuperHeroes, 
} from './superheroes';

function* mainSaga() {
  yield all([
    fork(watchFetchSuperHeroes),
  ]);
}

export default mainSaga;