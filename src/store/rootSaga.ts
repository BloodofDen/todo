import { all, fork } from 'redux-saga/effects';

import todoListSaga from '../redux/todo/sagas';

export default function* rootSaga(): any {
  yield all([
    fork(todoListSaga),
  ]);
}
