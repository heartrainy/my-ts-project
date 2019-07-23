const initState = {
  num3: 30
}

export default function test3(state = initState, action: any) {
  switch (action.type) {
    case 'INCREMENT3':
      state.num3 = state.num3 + 1
      return { ...state }
    case 'DECREMENT3':
      state.num3 = state.num3 - 1
      return { ...state }
    default:
      return state
  }
}