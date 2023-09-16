import { combineReducers } from 'redux';
import * as types from '../types/superheroes';

interface Action {
    type: string;
    payload: any
}

export const data = (state = [], action : Action) => {
    switch (action.type) {
      case types.SUPER_HEROES_STARTED: {
        return [];
      }
      case types.SUPER_HEROES_COMPLETED: {
        return action.payload;
      }
      case types.SUPER_HEROES_FAILED: {
        return [];
      }
      default:
        return state;
    }
};

export const error = (state = null, action : Action) => {
    switch (action.type) {
      case types.SUPER_HEROES_STARTED: {
        return null;
      }
      case types.SUPER_HEROES_COMPLETED: {
        return null;
      }
      case types.SUPER_HEROES_FAILED: {
        return action.payload;
      }
      default:
        return state;
    }
};

const isLoading = (state = false, action : Action) => {
    switch(action.type) {
      case types.SUPER_HEROES_STARTED: {
        return true;
      }
      case types.SUPER_HEROES_COMPLETED: {
        return false;
      }
      case types.SUPER_HEROES_FAILED: {
        return false;
      }
      default:
        return state;
    }
};

const superheroes = combineReducers({
    data,
    isLoading,
    error,
});

export default superheroes;