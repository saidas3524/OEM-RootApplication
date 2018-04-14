import { makeActionCreator } from '../../utility';
export const SET_REPOS = "SET_REPOS";
export const setRepos = makeActionCreator(SET_REPOS,"repos");
export const GET_REPOS = "GET_REPOS";
export const getRepos = makeActionCreator(GET_REPOS);