import * as ActionTyeps from './ActionTypes'

export default (state, action) => {
    const {counterCaption} = action

    switch (action.type) {
        case ActionTyeps.INCREMENT:
            return {
                ...state,
                [counterCaption]: state[counterCaption] + 1
            }
        case ActionTyeps.DECREMENT:
            return {
                ...state,
                [counterCaption]: state[counterCaption] - 1
            }
        default:
            return state
    }
}