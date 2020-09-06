module.exports = {
    entry: {
        main: './main.js'
    },
    mode: "development",
    optimization: {
    //removeAvailableModules: false,
    //removeEmptyChunks: false,
    //splitChunks: false,
        minimize: false,
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [['@babel/plugin-transform-react-jsx', {pragma: 'createElement'}]]
                }
            }
            }
        ]
    }
}