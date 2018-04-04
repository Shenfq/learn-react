import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as Actions from '../Actions'

class Counter extends Component {
  static propTypes = {
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    caption: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }
  render() {
    const {onIncrement, onDecrement, caption, value} = this.props
    return (
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <span>{caption} count: {value}</span>
      </div>
    )
  }
}

class CounterContainer extends Component {
  static contextTypes = {
    store: PropTypes.object
  }
  constructor (...args) {
    super(...args)

    this.state = this.getOwnState();
  }
  getOwnState = () => {
    return {
      value: this.context.store.getState()[this.props.caption]
    }
  }

  onIncrement = () => {
    this.context.store.dispatch(Actions.increment(this.props.caption))
  }

  onDecrement = () => {
    this.context.store.dispatch(Actions.decrement(this.props.caption))
  }

  onChange = () => {
      this.setState(this.getOwnState())
  }

  shouldComponentUpdate (nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
      (nextState.value !== this.state.value)
  }

  componentDidMount () {
    this.context.store.subscribe(this.onChange)
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange)
  }

  render () {
      return (
        <Counter
          caption={this.props.caption}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          value={this.state.value}
        />
      )
  }
}

export default CounterContainer
