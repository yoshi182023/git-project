// sagas/counterSaga.js
import { put, takeEvery, delay } from "redux-saga/effects";
import { increment, decrement } from "src/reducers/userSlice";
import { call, takeLatest } from "redux-saga/effects";

// Worker saga
// export function* handleAsyncUser() {
//   const data = yield fetch(`https://api.github.com/users/${username}`).then(
//     (res) => res.json()
//   );
//   console.log("sage:", data);
// }

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  console.log("fetchact", action);
  try {
    const user = yield call(
      `https://api.github.com/users/${action.payload.username}`
    );
    console.log("fetch", user);

    yield put({ type: "ABC", user: user });
    //yield put(setUser(user));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export function* handleAsyncDecrement() {
  yield delay(1000);
  yield put(decrement());
}

// Watcher saga
export default function* userSaga() {
  yield takeEvery("ABC", fetchUser);
}
