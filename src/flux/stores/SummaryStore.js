import AppDispatcher from '../AppDispatcher'
import * as ActionTypes from '../ActionTypes'
import CounterStore from './CounterStore'
import { EventEmitter } from 'events'
import event from './_event'


function computeSummary (counterValues) {
    let summary = 0;
    Object.keys(counterValues).forEach(key => {
        summary += counterValues[key]
    })

    return summary
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, event, {
    getSummary: function () {
        return computeSummary(CounterStore.getCounterValues())
    }
})

SummaryStore.dispatchToken = AppDispatcher.register(action => {
    if ((action.type === ActionTypes.INCREMENT) ||
        (action.type === ActionTypes.DECREMENT)) {
        //等待CounterStore
        AppDispatcher.waitFor([CounterStore.dispatchToken]);
        SummaryStore.emitChange();
    }
})

export default SummaryStore