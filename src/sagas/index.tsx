import { fork, all } from 'redux-saga/effects';

import { 
  watchFetchSuperHeroes, 
  watchLikeSuperhero
} from './superheroes';

function* mainSaga() {
  yield all([
    fork(watchFetchSuperHeroes),
    fork(watchLikeSuperhero),
  ]);
}

export default mainSaga;