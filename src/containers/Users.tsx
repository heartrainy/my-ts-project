import { connect } from 'react-redux'
import Users from '@pages/User/Users'
import { USER_QUERY_ASYNC, USER_ADD_ASYNC, USER_CREATE_VISIBLE, USER_CANCEL } from '@action/index'

const mapStateToProps = (state: any) => {
  return {
    data: state.user.data,
    tableLoading: state.user.tableLoading,
    createLoading: state.user.createLoading,
    createVisible: state.user.createVisible
  }
}

export const mapDispatchToProps = (dispatch: any) => {
  return {
    query: (payload: any) => {
      dispatch({ type: USER_QUERY_ASYNC, payload })
    },
    add: (payload: any) => {
      dispatch({ type: USER_ADD_ASYNC, payload })
    },
    handleCreateVisible: (payload: boolean) => {
      dispatch({ type: USER_CREATE_VISIBLE, payload })
      dispatch({ type: USER_CANCEL })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)