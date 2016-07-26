var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
require('shelljs/global');

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist/',
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'STATIC': __dirname + '/static',
            'SRC': __dirname + '/src',
            'COMPONENT': __dirname + '/src/components',
            'VIEW': __dirname + '/src/views',
            'VUX': __dirname + '/node_modules/vux/src/components/'
        }
    },
    externals: {
        'jquery': 'jQuery',
        'swiper': 'Swiper'
    },
    module: {
        // avoid webpack trying to shim process
        noParse: /es6-promise\.js$/,
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            // excluding some local linked packages.
            // for normal use cases only node_modules is needed.
            exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            loader: 'babel'
        }, {
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}, {
			test: /\.json$/,
			loader: 'json'
		},{
            test: /vux.src.*?js$/,
            loader: 'babel'
        }]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}

if (process.env.NODE_ENV === 'production') {
	rm('-rf', __dirname + '/dist/');
	mkdir('-p', __dirname + '/dist/static');
	cp('-R', __dirname + '/static', __dirname + '/dist');

	module.exports.output.publicPath = './';
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
		new HtmlWebpackPlugin({
			template: 'index__.html',
			inject: true,
			hash: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			}
		})
    ]
} else {
	module.exports.plugins = [
		new HtmlWebpackPlugin({
			template: 'index__.html',
			inject: true,
			hash: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			}
		})
    ]
    module.exports.devtool = '#source-map'
}