import { USER_QUERY, USER_TABLE_LOADING, USER_CREATE_LOADING, USER_CREATE_VISIBLE, USER_CANCEL } from '@action/index'
import { IUserRecord } from '@pages/User/Users'

const initState: any = {
  data: [],
  tableLoading: false,
  createLoading: false,
  createVisible: false
}

export default function User(state = initState, action: any) {
  switch (action.type) {
    case USER_QUERY:
      state.data = action.data.slice()
      return {...state}
    case USER_TABLE_LOADING:
      state.tableLoading = action.tableLoading
      return {...state}
    case USER_CREATE_LOADING:
      state.createLoading = action.createLoading
      return {...state}
    case USER_CREATE_VISIBLE:
      state.createVisible = action.payload
      return {...state}
    case USER_CANCEL:
        return state
    default:
      return state
  }
}