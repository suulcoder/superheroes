import * as types from '../types/superheroes';

export const start_superheroes_fetch = () => ({
    type: types.SUPER_HEROES_STARTED,
});

export const complete_superheroes_fetch = (response:Response) => ({
    type: types.SUPER_HEROES_COMPLETED,
    payload: response,
})

export const fail_superheroes_fetch = (error:string) => ({
    type: types.SUPER_HEROES_FAILED,
    payload: error,
});

export const like_superhero = () => ({
    type: types.LIKE_SUPERHEROE,
});

export const unlike_superhero = () => ({
    type: types.UNLIKE_SUPERHEROE,
});