import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from "rollup-plugin-terser";

const fs = require("fs");

const pkg = JSON.parse(require("fs")
    .readFileSync(require("path")
        .resolve('./package.json'), 'utf-8'));

const external = Object.keys(pkg.dependencies || {});

const allComponents = fs.readdirSync("./components");

const allFiles = allComponents
    .filter(a => a.endsWith(".js"))
    .map(a => `./components/${a}`)

const getConfig = (file) => ({
    input: file,
    output: [
        {
            dir: "dist",
            format: 'cjs',
            exports: "auto"
        }
    ],
    plugins: [
        resolve(),
        babel(),
        commonjs(),
        terser()
    ],
    external
})

export default allFiles.map(getConfig)