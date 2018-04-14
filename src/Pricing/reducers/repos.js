import { createReducer } from './../../utility';
import { fromJS} from 'immutable'
import {
    SET_REPOS
} from '../actions'
export const repos = createReducer(null, {
    [SET_REPOS](state,{repos}) {
        return fromJS(repos);
    }
});