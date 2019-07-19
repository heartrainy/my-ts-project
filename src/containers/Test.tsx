import { connect } from 'react-redux'
import Test, { IStore, IStore2 } from '@pages/Test'
import { INCREMENT, DECREMENT, INCREMENT2, DECREMENT2 } from '@action/index'

interface IState {
  test: IStore,
  test2: IStore2
}

const mapStateToProps = (state: IState) => {
  return {
    test: state.test,
    test2: state.test2
  }
}

export const mapDispatchToProps = (dispatch: any) => {
  return {
    addNum: () => {
      dispatch({ type: INCREMENT })
    },
    decreaseNum: () => {
      dispatch({ type: DECREMENT })
    },
    addNum2: () => {
      dispatch({ type: INCREMENT2 })
    },
    decreaseNum2: () => {
      dispatch({ type: DECREMENT2 })
    },
    addNumSaga: () => {
      dispatch({ type: 'INCREMENT_ASYNC', payload: {name: 'name'}})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test)