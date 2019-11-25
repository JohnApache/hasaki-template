import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
<%_ if(locals.reduxPlugin === 'redux-thunk'){ _%>
import thunkMiddleware from 'redux-thunk';
<%_ } _%>
<%_ if(locals.reduxPlugin === 'redux-saga'){ _%>
import createSagaMiddleware from 'redux-saga';
import sagas from './RootSaga';
<%_ } _%>


import reducers from './RootReducers';



const isDev = () => process.env.NODE_ENV === 'development';

export default (preloadedState) => {
    <%_ if(locals.reduxPlugin === 'redux-saga'){ _%>
    const sagaMiddleware = createSagaMiddleware();
    <%_ } _%>
    
    const logMiddleware =  createLogger();
    
    const enhancer = applyMiddleware(
        <%_ if(locals.reduxPlugin === 'redux-saga'){ _%>
        sagaMiddleware,
        <%_ } _%>
        <%_ if(locals.reduxPlugin === 'redux-thunk'){ _%>
        thunkMiddleware,
        <%_ } _%>
        logMiddleware
    );

    const store = createStore(reducers, enhancer);
    <%_ if(locals.reduxPlugin === 'redux-saga'){ _%>
    sagaMiddleware.run(sagas);
    <%_ } _%>
    

    if (isDev() && module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./RootReducers.js', () => {
            const nextRootReducer = require('./RootReducers.js').default
            store.replaceReducer(nextRootReducer)
        })
    }
    return store;
}