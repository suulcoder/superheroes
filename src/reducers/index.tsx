import { combineReducers } from 'redux';
import superheroes from './superheroes';
import isCollapsed from './liked';
import query from './search';

const reducer = combineReducers({
    superheroes,
    isCollapsed,
    query
});

export default reducer;