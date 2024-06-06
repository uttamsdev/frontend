import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

export default {
    input: 'src/app.js',
    output: {
        file: "public/bundle.js",
        format: "esm"
    },
    plugins: [nodeResolve({extensions: ['.js', '.jsx']}), commonjs(), replace({'process.env.NODE_ENV': JSON.stringify("development")})]
}