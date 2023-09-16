import {
    takeEvery,
    put,
} from 'redux-saga/effects';

import * as actions from '../actions/superheroes';
import * as types from '../types/superheroes';
import axios from 'axios';

const API_URL : string = 'https://cors-anywhere.herokuapp.com/https://akabab.github.io/superhero-api/api/all.json'

interface Action {
    type: string;
    payload: any
}

function* fetchSuperHeroes(action:Action) {
    try {
        const response : Response = yield axios.get(
          `${API_URL}`,
          {
            headers: {
                'Accept': '*/*',
                'Origin': 'https://akabab.github.io/superhero-api/api/all.json'
            },
          }
        )
        if(response.status == 200){
            yield put(actions.complete_superheroes_fetch(response))
        } else {
            yield put(actions.fail_superheroes_fetch('Something went wrong'))
        }
    } catch (error ) {
        yield put(actions.fail_superheroes_fetch('Something went wrong'))
    }
}
  
export function* watchFetchSuperHeroes() {
    yield takeEvery(
        types.SUPER_HEROES_STARTED,
        fetchSuperHeroes,
    );
}