import * as Actions from './action';
const TodoList = (state = {
    isLoading: false,
    todoList: []
}, action) => {
    switch(action.type) {
        case Actions.ADD_ITEM:
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload.item
                ]
            }
        case Actions.DELETE_ITEM:
            return {
                ...state,
                todoList: state.todoList.filter((_, i) => i !== action.payload.index)
            }  
        case Actions.CHANGE_STATUS:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }      
        default:
            return state
    }
}

export default TodoList;