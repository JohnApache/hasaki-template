module.exports =  {
    parser:  <% if(locals.useTs){ %>'@typescript-eslint/parser'<% } else { %>'babel-eslint'<% } %>,  // Specifies the ESLint parser
    parserOptions: {
      ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
      },
    },
    extends:  [
      'airbnb-base',  // Uses airbnb, it including the react rule(eslint-plugin-react/eslint-plugin-jsx-a11y)
      <%_ if(locals.useTs){ _%>
      'plugin:@typescript-eslint/recommended', // Optional enable, will more stricter
      'plugin:import/typescript', // Use prettier/react to pretty react syntax
      <%_ } _%>
      'plugin:promise/recommended',
      // 'plugin:prettier/recommended',
      // 'prettier/@typescript-eslint'
    ],
    settings: {
      'import/parsers': {
        <%_ if(locals.useTs){ _%>
        '@typescript-eslint/parser': ['.ts', '.tsx']
        <%_ } _%>
      },
      'import/resolver': {
        <%_ if(locals.useTs){ _%>
        // use <root>/path/to/folder/tsconfig.json
        typescript: {
          directory: './tsconfig.json'
        },
        <%_ } _%>
      }
    },
    env: {
      browser: true, // enable all browser global variables
      commonjs: true,
      es6: true,
      jest: true,
      node: true
    },
    plugins: [<% if(locals.useTs) { %>'@typescript-eslint', <% } %>'promise'],
    rules:  {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
      'no-useless-constructor': 0,
      'no-console': 0,
      'class-methods-use-this': 0,
      'indent': ['error', 4],
      'func-names': 0,
      'no-unused-expressions': 0,
      'no-plusplus': 0,
      'import/prefer-default-export': 0,
      'no-param-reassign': 0,
      'max-len': ['error', {
        'code': 120,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true
      }],
      'consistent-return': 0,
      <%_ if(locals.useTs){ _%>


      /**
       * @description rules of @typescript-eslint
       */
      '@typescript-eslint/prefer-interface': 'off', // also want to use 'type'
      '@typescript-eslint/explicit-function-return-type': 'off', // annoying to force return type
      '@typescript-eslint/indent': ['error', 4], // avoid conflict with airbn
      '@typescript-eslint/no-explicit-any': 'off'
      <%_ } _%>  

      /**
       * @description rules of eslint-plugin-prettier
       */
      // 'prettier/prettier': [
      //   error, {
      //     singleQuote: true,
      //     semi: false
      //   }
      // ]
    },
  };
  