module.exports = {
    parseExclude: [],
    parseInclude: [],
    ignore: [],
    question: [
        {
            type: 'list',
            message: 'use redux or mobx?',
            name: 'store',
            choices() {
                return [
                    'redux',
                    'mobx'
                ]
            }
        },
        {
            type: 'list',
            message: 'use redux-thunk or redux-saga?',
            name: 'reduxPlugin',
            when(answer){
                return answer.store === 'redux'
            },
            choices() {
                return [
                    'redux-thunk',
                    'redux-saga'
                ]
            }
        },
        {
            type: 'list',
            message: 'use less or sass?',
            name: 'preprocessor',
            choices() {
                return [
                    {
                        name: `less`,
                        value: `less`,
                    }, 
                    {
                        name: `sass`,
                        value: `scss`,
                    }
                ]
            }
        },
        {
            type: 'confirm',
            message: 'use antd?',
            name: 'useAntd',
            default: true
        },
        
    ],
    screener(answers) {
        const {
            store,
            reduxPlugin,
            preprocessor,
        } = answers;

        const include = [];
        const exclude = [];
    
        if(store === 'mobx') {
            exclude.push({
                path: './src/Redux'
            }, {
                path: './src/Pages/CounterRedux'
            }, {
                path: './src/Pages/TodoListSaga'
            }, {
                path: './src/Pages/TodoListSaga'
            }, {
                path: './src/Pages/TodoListThunk'
            });
        }else {
            exclude.push({
                path: './src/Mobx'
            }, {
                path: './src/Pages/TodoListMobx'
            }, {
                path: './src/Pages/CounterMobx'
            });

            if(reduxPlugin === 'redux-thunk') {
                exclude.push({
                    path: './src/Redux/Modal/TodoListSaga'
                }, {
                    path: './src/Redux/RootSaga.js'
                });
            }else {
                exclude.push({
                    path: './src/Redux/Modal/TodoListThunk'
                });
            }
        }

        if(preprocessor === 'less') {
            exclude.push({
                match: /^.+\.scss$/
            })
        }else {
            exclude.push({
                path: './.npmrc'
            }, {
                match: /^.+\.less$/
            })
        }

        return {
            include,
            exclude
        }
    }
}