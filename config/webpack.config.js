/*
 * @Author: Aiden
 * @Date: 2020-09-01 16:37:15
 * @LastEditTime: 2021-01-15 15:48:05
 * @LastEditors: Aiden
 * @Description: 
 */
module.exports = (env) => {
  console.log('env======', env)
  if (env && env.NODE_ENV === 'production') {
      return require('./webpack.prod.config.js');
  } else {
    console.log('11111')
      return require('./webpack.dev.config.js');
      // return require('./webpack.prod.config.js');
  }
};