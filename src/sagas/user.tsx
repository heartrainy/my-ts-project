import { put, call, takeLatest, take, fork, cancel } from 'redux-saga/effects'
import { USER_QUERY, USER_QUERY_ASYNC, USER_TABLE_LOADING, USER_ADD_ASYNC, USER_CREATE_LOADING, USER_CREATE_VISIBLE, USER_CANCEL } from '@action/index'
import request from '@utils/request'
import URL from '@urls/index'

// 上次查询条件
const searchPayload: any = {}

function* query(action: any) {
  console.log('开始')
  const params = Object.assign({}, action.payload)
  searchPayload.payload = Object.assign({}, params)
  const postParams: any = {}
  postParams.method = 'post'
  postParams.data = params
  yield put({ type: USER_TABLE_LOADING, tableLoading: true })
  const response = yield call(request, URL.USER.USERLIST, postParams)
  console.log('中途')
  yield put({ type: USER_QUERY, ...response })
  yield put({ type: USER_TABLE_LOADING, tableLoading: false })
  console.log('结束')
}

function* add(action: any) {
  const params = Object.assign({}, action.payload)
  const postParams: any = {}
  postParams.method = 'post'
  postParams.data = params
  yield put({ type: USER_CREATE_LOADING, createLoading: true })
  const response = yield call(request, URL.USER.USERADD, postParams)
  yield put({ type: USER_CREATE_LOADING, createLoading: false })
  yield put({ type: USER_CREATE_VISIBLE, payload: false })
  yield call(query, searchPayload)
}

export default function* user() {
  // 监听查询
  yield takeLatest(USER_QUERY_ASYNC, query)
  // 监听添加
  while (true) {
    const addAction = yield take(USER_ADD_ASYNC)
    const addTask = yield fork(add, addAction)
    yield take(USER_CANCEL)
    yield cancel(addTask)
  }
}