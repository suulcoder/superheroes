import { fork, all } from 'redux-saga/effects';

// import { 
//   watchFetchModels, 
// } from './models';

function* mainSaga() {
  yield all([
    //fork(watchFetchModels),
  ]);
}

export default mainSaga;