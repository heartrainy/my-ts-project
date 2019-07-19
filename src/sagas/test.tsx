import { put, takeEvery } from 'redux-saga/effects'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* addNum(action: any) {
  console.log(action)
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

export default function* test() {
  yield takeEvery('INCREMENT_ASYNC', addNum)
}