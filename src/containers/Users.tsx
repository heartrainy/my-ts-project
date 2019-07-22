import { connect } from 'react-redux'
import Users from '@pages/User/Users'
import { USER_QUERY_ASYNC } from '@action/index'

const mapStateToProps = (state: any) => {
  return {
    data: state.user.data,
    tableLoading: state.user.tableLoading
  }
}

export const mapDispatchToProps = (dispatch: any) => {
  return {
    query: (params: any) => {
      dispatch({ type: USER_QUERY_ASYNC , payload: {...params}})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)