import { USER_QUERY } from '@action/index'
import { IUserRecord } from '@pages/Users'

const initState: { data: IUserRecord[] } = {
  data: []
}

export default function User(state = initState, action: any) {
  switch (action.type) {
    case USER_QUERY:
      const newState = Object.assign({}, state)
      newState.data = action.data.slice()
      return newState
    default:
      return state
  }
}