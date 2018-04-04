import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Summary extends Component {
  static propTypes = {
    sum: PropTypes.number.isRequired
  }
  render () {
    return (
      <div>Total Count: {this.props.sum}</div>
    )
  }
}

class SummaryConainer extends Component {
  static contextTypes = {
    store: PropTypes.object
  }
  constructor(...args) {
    super(...args)

    this.state = this.getSummary()
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextState.sum !== this.state.sum;
  }

  componentDidMount() {
    this.context.store.subscribe(this.onChange)
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange)
  }

  getSummary = () => {
    let values = this.context.store.getState()
    let sum = 0

    Object.keys(values).forEach(key => {
      sum += values[key];
    })

    return {sum}
  }

  onChange = () => {
    this.setState(this.getSummary())
  }

  render () {
    return (
      <Summary sum={this.state.sum} />
    )
  }
}


export default SummaryConainer
