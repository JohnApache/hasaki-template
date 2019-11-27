import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';

import os from 'os';

const cpuNums = os.cpus().length;

const DEV_BUILD_CONFIG = {
    input: {
        main: path.resolve(__dirname, './src/index.ts'),
    },
    plugins: [
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    module: 'ES2015',
                },
            },
        }),
        resolve(),
        common({
            include: 'node_modules/**', // 包括
            exclude: [], // 排除
            extensions: ['.js', '.ts'],
        }),
    ],
    output: {
        dir: path.resolve(__dirname, 'dist'),
        format: 'umd',
        name: 'rollupTest',
        entryFileNames: '[name]-[format].js',
        chunkFileNames: '[name]-[format].js',
        compact: false,
        banner: '/* Created By @dking/hasaki-cli */',
        footer: '/* hasaki-cli git: https://github.com/JohnApache/hasaki-cli */',
        extend: false,
        sourcemap: false,
    },
    treeshake: {
        moduleSideEffects: true,
    },
};

const PROD_BUILD_TASK = {
    input: {
        main: path.resolve(__dirname, './src/index.ts'),
    },
    plugins: [
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    module: 'ES2015',
                },
            },
        }),
        resolve(),
        common({
            include: 'node_modules/**', // 包括
            exclude: [], // 排除
            extensions: ['.js', '.ts'],
        }),
        babel({
            runtimeHelpers: true,
            extensions: ['.js', '.ts'],
        }),
        terser({
            output: {
                comments: false,
            },
            include: [/^.+\.js$/],
            exclude: ['node_moudles/**'],
            numWorkers: cpuNums,
            sourcemap: false,
        }),
    ],
    output: {
        dir: path.resolve(__dirname, 'dist'),
        format: 'umd',
        name: 'rollupTest',
        entryFileNames: '[name]-[format].min.js',
        chunkFileNames: '[name]-[format].min.js',
        compact: false,
        banner: '/* Created By @dking/hasaki-cli */',
        footer: '/* hasaki-cli git: https://github.com/JohnApache/hasaki-cli */',
        extend: false,
        sourcemap: false,
    },
    treeshake: {
        moduleSideEffects: true,
    },
};

export default [DEV_BUILD_CONFIG, PROD_BUILD_TASK];
