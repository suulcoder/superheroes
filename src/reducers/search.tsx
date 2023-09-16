import * as types from '../types/search';

interface Action {
    type: string;
    payload: any
}

const query = (state = '', action : Action) => {
    switch(action.type) {
      case types.SEARCH_QUERY: {
        return action.payload;
      }
      case types.CLEAN_QUERY: {
        return '';
      }
      default:
        return state;
    }
};

export default query;