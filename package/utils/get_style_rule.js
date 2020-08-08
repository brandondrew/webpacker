const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { resolve } = require('path')

const getStyleRule = (test, preprocessors = []) => {
  const use = [
    MiniCssExtractPlugin.loader,
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 2
      }
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        config: { path: resolve() }
      }
    },
    ...preprocessors
  ]

  return {
    test,
    use
  }
}

module.exports = getStyleRule
