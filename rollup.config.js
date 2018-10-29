import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';

export default {
  input: './src/index.ts',
  output: {
    file: './dist/bundle.js',
    format: 'iife',
    name: 'hoge'
  },
  plugins: [nodeResolve(), commonjs(), typescript(), babel()]
};