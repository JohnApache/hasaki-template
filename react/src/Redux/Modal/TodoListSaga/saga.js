import { takeLatest, delay, put } from 'redux-saga/effects';
import { HANDLE_ADD_ITEM, addItem, changeStatus } from './action'
function* handleAddItem (action) {
    yield put(changeStatus(true))
    yield delay(1000);
    yield put(changeStatus(false))
    yield put(addItem(action.payload.item))
}

export function* watchHandleAddItem() {
    yield takeLatest(HANDLE_ADD_ITEM, handleAddItem)
}

