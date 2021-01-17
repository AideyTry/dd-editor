/*
 * @Author: Aiden
 * @Date: 2020-09-01 16:37:15
 * @LastEditTime: 2021-01-17 13:40:42
 * @LastEditors: Aiden
 * @Description: 
 */
module.exports = (env) => {
  if (env && env.NODE_ENV === 'production') {
      return require('./webpack.prod.config.js');
  } else {
      return require('./webpack.dev.config.js');
  }
};