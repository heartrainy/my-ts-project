import { USER_QUERY, USER_TABLE_LOAD } from '@action/index'
import { IUserRecord } from '@pages/User/Users'

const initState: any = {
  data: [],
  tableLoading: false,
}

export default function User(state = initState, action: any) {
  switch (action.type) {
    case USER_QUERY:
      state.data = action.data.slice()
      return {...state}
    case USER_TABLE_LOAD:
      state.tableLoading = action.tableLoading
      return {...state}
    default:
      return state
  }
}