import { BuildAction } from '../../RootActions'
export const ADD_NUM = 'COUNTER/ADD_NUM';
export const SUBTRACT_NUM = 'COUNTER/SUBTRACT_NUM';
export const addNum = (count) => BuildAction(ADD_NUM, { count });
export const subtractNum = (count) => BuildAction(SUBTRACT_NUM, { count });