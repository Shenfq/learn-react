import React, { Component } from 'react'
import PropTypes from 'prop-types';

import store from '../stores/CounterStore'
import * as Actions from '../Actions'


class Counter extends Component {
    static propTypes = {
        caption: PropTypes.string.isRequired
    }
    constructor (props) {
        super(props)

        this.state = {
            value: store.getCounterValues()[props.caption]
        }
    }

    onIncrement = () => {
        Actions.increment(this.props.caption)
    }

    onDecrement = () => {
        Actions.decrement(this.props.caption)
    }

    onChange = () => {
        const newValue = store.getCounterValues()[this.props.caption]
        this.setState({
            value: newValue
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.value !== this.state.value)
    }

    componentDidMount() {
        store.bind(this.onChange)
    }

    componentWillUnmount() {
        store.unbind(this.onChange)
    }

    render () {
        const value = this.state.value
        const {caption} = this.props

        return (
            <div>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
                <span>{caption} count: {value}</span> 
            </div>
        )
    }
}

export default Counter