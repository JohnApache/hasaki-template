import { BuildAction } from '../../RootActions';

export const ADD_ITEM = 'TODOLIST_SAGA/ADD_NUM';
export const DELETE_ITEM = 'TODOLIST_SAGA/DELETE_ITEM';
export const CHANGE_STATUS = 'TODOLIST_SAGA/CHANGE_STATUS';


export const addItem = item => BuildAction(ADD_ITEM, {item});
export const deleteItem = index => BuildAction(DELETE_ITEM, {index});
export const changeStatus = isLoading => BuildAction(CHANGE_STATUS, {isLoading});

export const HANDLE_ADD_ITEM = 'TODOLIST_SAGA/HANDLE_ADD_ITEM';
export const handleAddItem = item => BuildAction(HANDLE_ADD_ITEM, {item});
