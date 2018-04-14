import { take, put, call } from 'redux-saga/effects';
import { GET_REPOS, setRepos } from '../actions';
import fetch from 'isomorphic-fetch';


export function* reposSaga() {

    while (true) {
        console.log("saga executing");
        yield take(GET_REPOS);
        var data = yield call(fetch, "https://api.github.com/users/saidas3524/repos");
        data = yield data.json();
        yield put(setRepos(data));
    }
}