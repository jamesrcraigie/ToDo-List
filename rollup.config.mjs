import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
    input: 'js/main.tsx',
    output: {
        file: 'wwwroot/dist/main.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-react']
        }),
        typescript({
            compilerOptions: {
                "experimentalDecorators": true,
                "esModuleInterop": true,
                "jsx": "react",
                "target": "es6",
                "lib": ["es2018", "dom"]
            }
        }),
        replace({
            'preventAssignment': true,
            'process.env.NODE_ENV': '"development"'
        })
    ]
}