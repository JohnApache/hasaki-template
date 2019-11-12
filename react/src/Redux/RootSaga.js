import { all, fork } from 'redux-saga/effects';
import { watchHandleAddItem } from './Modal/TodoListSaga/saga'
function* rootSagas() {
    yield all([
        fork(watchHandleAddItem)
    ])
}

export default rootSagas;