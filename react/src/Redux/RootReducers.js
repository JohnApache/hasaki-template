import { combineReducers } from 'redux';
import Counter from './Modal/CounterRedux/reducer';
<%_ if(locals.reduxPlugin === 'redux-thunk'){ _%>
import TodoList from './Modal/TodoListThunk/reducer';
<%_ }else { _%>
import TodoListSaga from './Modal/TodoListSaga/reducer';
<%_ } _%>


export default combineReducers({
    Counter,
    <%_ if(locals.reduxPlugin === 'redux-thunk'){ _%>
    TodoList,
    <%_ }else { _%>
    TodoListSaga,
    <%_ } _%>
})