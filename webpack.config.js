const path = require('path')
const ExtensionReloader = require('webpack-extension-reloader'); 

module.exports = {
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map',
  entry: {
    dashboard: './src/dashboard.js'
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname + '/plugin/'),
    filename: '[name].js',
    libraryTarget: "umd"
  },
  plugins: [
    // Chrome extension hot reloading
    new ExtensionReloader({
      port: 9090,
      reloadPage: true
      , entries: {
        extensionPage: ['dashboard']
      }
    })
  ]
}
