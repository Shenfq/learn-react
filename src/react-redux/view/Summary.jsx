import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const Summary = ({sum}) => (
  <div>Total Count: {sum}</div>
)
Summary.propTypes = {
  sum: PropTypes.number.isRequired
}

const mapStateToProps = state => {
  let sum = 0;
  Object.keys(state).forEach(key => {
    sum += state[key]
  })
  return {
    sum
  }
}


export default connect(mapStateToProps)(Summary)
