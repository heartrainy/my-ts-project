import { all } from 'redux-saga/effects'

import helloSaga from './helloSaga'
import test from './test'
import user from './user'

export default function* rootSaga() {
  yield all([
    helloSaga(),
    test(),
    user()
  ])
}