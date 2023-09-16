import * as types from '../types/liked';

interface Action {
    type: string;
    payload: any
}

const isCollapsed = (state = false, action : Action) => {
    switch(action.type) {
      case types.TOGGLE_COLLAPSE_LIKED: {
        return !state;
      }
      default:
        return state;
    }
};

export default isCollapsed;