// sagas/counterSaga.js
import { put, takeEvery, delay } from 'redux-saga/effects';
import { increment, decrement } from 'src/reducers/counterSlice';

// Worker saga
export function* handleAsyncIncrement() {
    yield delay(1000); // simulate async operation
    yield put(increment());
}

export function* handleAsyncDecrement() {
    yield delay(1000);
    yield put(decrement());
}

// Watcher saga
export default function* counterSaga() {
    yield takeEvery('counter/asyncIncrement', handleAsyncIncrement);
    yield takeEvery('counter/asyncDecrement', handleAsyncDecrement);
}
