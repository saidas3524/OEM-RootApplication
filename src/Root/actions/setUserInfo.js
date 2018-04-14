import { makeActionCreator } from 'oem-utility-package';
export const SET_USER = "SET_USER";
export const setUser = makeActionCreator(SET_USER,"userInfo");
export const GET_USER = "GET_USER";
export const getUser = makeActionCreator(GET_USER);