import { INCREMENT, DECREMENT } from '@action/index'

const initState = {
  num: 10
}

export default function test(state = initState, action: any) {
  switch (action.type) {
    case INCREMENT:
      state.num = state.num + 1
      return { ...state }
    case DECREMENT:
      state.num = state.num - 1
      return { ...state }
    default:
      return state
  }
}