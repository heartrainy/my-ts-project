import { combineReducers } from 'redux'
import test from './test'
import test2 from './test2'
import test3 from './test3'
import user from './user'

const reducer = combineReducers({
  test,
  test2,
  test3,
  user
})
export default reducer