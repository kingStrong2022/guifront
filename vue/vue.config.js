const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: {
      '': {
        target: process.env.VUE_PROXY_SERVER,
        ws:true
      },
      '/socket.io': {
        target: process.env.VUE_PROXY_SERVER,
        ws:true
      }
    }
  }
})
