import { INCREMENT2, DECREMENT2 } from '@action/index'

const initState = {
  num2: 20
}

export default function test(state = initState, action: any) {
  switch (action.type) {
    case INCREMENT2:
      state.num2 = state.num2 + 1
      return { ...state }
    case DECREMENT2:
      state.num2 = state.num2 - 1
      return { ...state }
    default:
      return state
  }
}