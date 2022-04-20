module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/sass/common.scss";'
      }
    }
  }
}

/*
module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}
*/