const initState = {
  num: 10
}

export default function counter(state = initState, action: any) {
  switch (action.type) {
    case 'INCREMENT':
      state.num = state.num + 1
      return state
    case 'DECREMENT':
      state.num = state.num - 1
      return state
    default:
      return state
  }
}