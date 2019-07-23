import { connect } from 'react-redux'
import Users from '@pages/Users'
import { USER_QUERY_ASYNC } from '@action/index'

const mapStateToProps = (state: any) => {
  return {
    data: state.user.data
  }
}

export const mapDispatchToProps = (dispatch: any) => {
  return {
    query: (payload: any) => {
      dispatch({ type: USER_QUERY_ASYNC , payload})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)