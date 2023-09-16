import * as types from '../types/search';

export const search_query = (query: string) => ({
    type: types.SEARCH_QUERY,
    payload: query
});

export const clean_query = () => ({
    type: types.CLEAN_QUERY
});