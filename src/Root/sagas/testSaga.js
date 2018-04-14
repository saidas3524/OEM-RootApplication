import { take, put, call } from 'redux-saga/effects';
import { GET_USER, setUser } from '../actions';
import fetch from 'isomorphic-fetch';


export function* testSaga() {

    while (true) {
        console.log("saga executing");
        yield take(GET_USER);
        var data = yield call(fetch, "https://api.github.com/users/saidas3524");
        data = yield data.json();
        yield put(setUser(data));
    }
}