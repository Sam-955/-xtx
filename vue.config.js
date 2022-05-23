const { defineConfig } = require('@vue/cli-service')
const path=require("path")
// const { ESLint } = require('eslint')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭语法检查
  lintOnSave: false,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname,"./src/assets/styles/variable.less"),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  }
})
