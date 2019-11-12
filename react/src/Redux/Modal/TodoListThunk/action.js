import { BuildAction } from '../../RootActions';

export const ADD_ITEM = 'TODOLIST/ADD_NUM';
export const DELETE_ITEM = 'TODOLIST/DELETE_ITEM';
export const CHANGE_STATUS = 'TODOLIST/CHANGE_STATUS';


export const addItem = item => BuildAction(ADD_ITEM, {item});
export const deleteItem = index => BuildAction(DELETE_ITEM, {index});
export const changeStatus = isLoading => BuildAction(CHANGE_STATUS, {isLoading});

export const handleAddItem = item => dispatch => {
    dispatch(changeStatus(true));
    setTimeout(() => {
        dispatch(changeStatus(false));
        dispatch(addItem(item));
    }, 1000)
}