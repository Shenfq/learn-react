import * as ActionTypes from '../ActionTypes'
import AppDispatcher from '../AppDispatcher'
import {EventEmitter} from 'events'
import event from './_event'

const counterValues = {
    First: 0,
    Second: 10,
    Third: 30
}

const CounterStore = Object.assign({}, EventEmitter.prototype, event, {
    getCounterValues: function () {
        return counterValues
    },

})

CounterStore.dispatchToken = AppDispatcher.register(action => {
    if (action.type === ActionTypes.INCREMENT) {
        counterValues[action.counterCaption] ++;
        CounterStore.emitChange()
    } else if (action.type === ActionTypes.DECREMENT) {
        counterValues[action.counterCaption] --;
        CounterStore.emitChange()
    }
})


export default CounterStore