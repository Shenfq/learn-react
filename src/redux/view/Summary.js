import React, { Component } from 'react'

import store from '../Store'


class Summary extends Component {
    constructor(props) {
        super(props);

        this.state = this.getSummary()
    }

    componentDidMount() {
        store.subscribe(this.onChange)
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange)
    }

    getSummary = () => {
        let values = store.getState()
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
            <div>Total Count: {this.state.sum}</div>
        )
    }
}


export default Summary