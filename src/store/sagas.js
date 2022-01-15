import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import * as api from './api.js'
import * as actions from './actions'
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getPosts(action) {
   try {
      const {data} = yield api.getPosts();
      console.log(data);
      yield put(actions.getPostsSuccess(data));
   } catch (e) {
      yield put(actions.getPostsFail('error',e));
   }
}

function* getCommments(action) {
  try {
     const {data} = yield api.getCommments();
     console.log(data);
     yield put(actions.getCommentsSuccess(data));
  } catch (e) {
     yield put(actions.getCommentsFail('error',e));
  }
}

export function* watchGetPost() {
  yield takeLatest("GET_POST", getPosts);
}

export function* watchgetCommments() {
  yield takeLatest("GET_COMMENT", getCommments);
}
  
//   function* incrementAsync() {
//     yield put({ type: 'INCREMENT' })
//   }
  
//   function* watchIncrementAsync() {
//     yield takeEvery('INCREMENT_ASYNC', incrementAsync)
//   }

  export default function* rootSaga() {
    yield all([
      watchGetPost(),
      watchgetCommments()
      // watchGetPost(),
        // incrementAsync(),
        // watchIncrementAsync()
    ]);
 }