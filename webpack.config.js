module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: ["app/components", "app/api", "node_modules"],
        alias: {
            Main: "Main.jsx",
            Nav: "Nav.jsx",

            Weather: "Weather.jsx",
            WeatherForm: "WeatherForm.jsx",
            WeatherMessage: "WeatherMessage.jsx",

            About: "About.jsx",
            Examples: "Examples.jsx",

            openWeatherMap: 'openWeatherMap.jsx'

        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    }
};
