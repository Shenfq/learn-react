import {Component} from 'react'
import PropTypes from 'prop-types'

class Provider extends Component {
  static propsTypes = {
    store: PropTypes.object
  }
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return {
      store: this.props.store
    }
  }

  render () {
    return this.props.children
  }
}

export default Provider
