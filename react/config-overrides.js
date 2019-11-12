const {
    addLessLoader,
    addBundleVisualizer,
    addDecoratorsLegacy,
    // addWebpackAlias,
    // addWebpackExternals,
    fixBabelImports,
    override,
} = require('customize-cra');

// const path = require('path');

/* config-overrides.js */
module.exports = override(
    addBundleVisualizer({}, true),
  
    addDecoratorsLegacy(),
    // 设置路径别名
    // addWebpackAlias({
        // '@': path.resolve(__dirname, './src/component')
    // }),

    // 设置外链
    // addWebpackExternals({
        // '$': 'jquery'
    // }),

    // 设置按需加载lodash
    // fixBabelImports('lodash', {
    //     libraryDirectory: "",
    //     camel2DashComponentName: false
    // }),

    // 设置按需加载antd
    fixBabelImports('antd', {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true // `style: true` 会加载 less 文件
    }),
    // lessLoader 要放在 fixBabelImports 之后
    addLessLoader({
        // strictMath: true, 
        // noIeCompat: true,
        localIdentName: "[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
)