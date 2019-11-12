import * as Actions from './action';

const Counter = (state = {
    value: 0,
}, action) => {
    switch(action.type) {
        case Actions.ADD_NUM: 
            return {
                value: state.value + action.payload.count 
            }
        case Actions.SUBTRACT_NUM:
            return {
                value: state.value - action.payload.count 
            }
        default:
            return state;        
    }
}

export default Counter;
