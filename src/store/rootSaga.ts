import { all, fork } from 'redux-saga/effects';

import todoListSaga from '../redux/todo/saga';

export default function* rootSaga() {
  yield all([
    fork(todoListSaga),
  ]);
}
