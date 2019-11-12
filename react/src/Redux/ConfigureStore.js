import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import reducers from './RootReducers';
import sagas from './RootSaga';

const isDev = () => process.env.NODE_ENV === 'development';

export default (preloadedState) => {
    const sagaMiddleware = createSagaMiddleware();
    const logMiddleware =  createLogger();
    
    const enhancer = applyMiddleware(
        sagaMiddleware,
        thunkMiddleware,
        logMiddleware
    );

    const store = createStore(reducers, enhancer);
    sagaMiddleware.run(sagas);
    
    if (isDev() && module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./RootReducers.js', () => {
            const nextRootReducer = require('./RootReducers.js').default
            store.replaceReducer(nextRootReducer)
        })
    }
    return store;
}