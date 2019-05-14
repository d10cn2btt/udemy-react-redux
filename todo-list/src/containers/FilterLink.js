import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

// mapStateToProps?: (state, ownProps?) => Object
// This object, normally referred to as stateProps, will be merged as props to your connected component
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

// mapDispatchToProps?: Object | (dispatch, ownProps?) => Object
// Your mapDispatchToProps functions are expected to return an object.
// Each fields of the object should be a function, calling which is expected to dispatch an action to the store
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

/**
 * Link source c: https://github.com/reduxjs/react-redux/blob/master/docs/api/connect.md#overviewode
 * function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
 */
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
