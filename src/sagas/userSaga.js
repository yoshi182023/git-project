// sagas/counterSaga.js
import { put, takeEvery, delay } from "redux-saga/effects";
import { call, takeLatest } from "redux-saga/effects";
import { setUser } from "src/reducers/userSlice";
// Worker saga
// export function* handleAsyncUser() {
//   const data = yield fetch(`https://api.github.com/users/${username}`).then(
//     (res) => res.json()
//   );
//   console.log("sage:", data);
// }
//** generator函数 像async await 底层 同步的方式写异步
// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  console.log("fetchact", action);
  try {
    const response = yield call(
      fetch,
      `https://api.github.com/users/${action.payload}`
    );
    const user = yield call([response, "json"]); //从后端拿到的信息，给了setUser函数
    //yield put({ type: "ABC", user: user });
    console.log("user", user);
    yield put(setUser(user)); //把数据存到redux仓库里
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

// Watcher saga
export default function* userSaga() {
  yield takeEvery("ABC", fetchUser);
}
