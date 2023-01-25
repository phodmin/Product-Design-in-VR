// PROXY TO CONNECT FRONT END SERVER AND BACK END
module.exports = {
  devServer: {
    proxy: "http://localhost:3344"
  }
};

// BELOW - ORIGINAL CODE THAT IS NOT BEING CURRENTLY USED

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })