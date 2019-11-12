import { combineReducers } from 'redux';
import Counter from './Modal/CounterRedux/reducer';
import TodoList from './Modal/TodoListThunk/reducer';
import TodoListSaga from './Modal/TodoListSaga/reducer';

export default combineReducers({
    Counter,
    TodoList,
    TodoListSaga
})