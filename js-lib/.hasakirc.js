module.exports = {
    parseExclude: [],
    parseInclude: [],
    ignore: [],
    question: [
        {
            type: 'confirm',
            message: 'use typescript?',
            name: 'useTs',
            default: true
        },
        
    ],
    screener(answers) {
        const {
            useTs,
        } = answers;

        const include = [];
        const exclude = [];
    
        if(useTs) {
            exclude.push({
                path: './src/index.js'
            }, {
                path: './test/index.test.js'
            })
        }else {
            exclude.push({
                path: './src/index.ts'
            }, {
                path: './test/index.test.ts'
            }, {
                path: './tsconfig.json'
            })
        }

        return {
            include,
            exclude
        }
    }
}