import { put, call, takeEvery } from 'redux-saga/effects'
import { USER_QUERY, USER_QUERY_ASYNC} from '@action/index'
import request from '@utils/request'
import URL from '@urls/index'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* query(action: any) {
  const params = Object.assign({}, action.payload)
  const postParams: any = {}
  postParams.method = 'post'
  postParams.data = params
  const response = yield call(request, URL.USER.ADDUSER, postParams)
  yield put({ type: USER_QUERY, ...response })
}

export default function* user() {
  // 监听查询
  yield takeEvery(USER_QUERY_ASYNC, query)
}