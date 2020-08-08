const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { resolve } = require('path')
const config = require('../config')

const styleLoader = {
  loader: require.resolve('style-loader')
}

const getStyleRule = (test, preprocessors = []) => {
  const use = [
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

  if (config.extract_css) {
    use.unshift(MiniCssExtractPlugin.loader)
  } else {
    use.unshift(styleLoader)
  }

  return {
    test,
    use
  }
}

module.exports = getStyleRule
