import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import * as Actions from '../Actions'


const Counter = ({onIncrement, onDecrement, caption, value}) => (
  <div>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
    <span>{caption} count: {value}</span>
  </div>
)


Counter.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  caption: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    value: state[ownProps.caption]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption))
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
