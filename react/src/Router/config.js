<%_ if(locals.store === 'redux'){ _%>
const RoutesConfig = [
    {
        Component: () => import(/* webpackChunkName: "CounterRedux" */'../Pages/CounterRedux'),
        Path: '/counterRedux',
        Exact: true,
        Name: 'CounterRedux',
    },
    <%_ if(locals.reduxPlugin === 'redux-thunk'){ _%>
    {
        Component: () => import(/* webpackChunkName: "TodoListThunk" */'../Pages/TodoListThunk'),
        Path: '/todolistThunk',
        Exact: true,
        Name: 'TodoListThunk'
    },
    <%_ } _%> 
    <%_ if(locals.reduxPlugin === 'redux-saga'){ _%>
    {
        Component: () => import(/* webpackChunkName: "TodoListSaga" */'../Pages/TodoListSaga'),
        Path: '/todolistSaga',
        Exact: true,
        Name: 'TodoListSaga'
    },
    <%_ } _%> 
]
<%_ } _%>     
<%_ if(locals.store === 'mobx'){ _%>
const RoutesConfig = [
    {
        Component: () => import(/* webpackChunkName: "CounterMobx" */'../Pages/CounterMobx'),
        Path: '/counterMobx',
        Exact: true,
        Name: 'CounterMobx',
    },
    {
        Component: () => import(/* webpackChunkName: "TodoListMobx" */'../Pages/TodoListMobx'),
        Path: '/todolistMobx',
        Exact: true,
        Name: 'TodoListMobx'
    },
]
<%_ } _%>   

export default RoutesConfig;