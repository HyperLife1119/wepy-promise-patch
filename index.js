var g = require('./global');

if (g) {
  if (g.Promise) {
    if (!g.Promise.prototype.finally) {
      g.Promise.prototype.finally = require('promise-polyfill').prototype.finally;
    }

    if (!g.Promise.allSettled) {
      g.Promise.allSettled = require('promise-polyfill').allSettled;
    }
  } else {
    g.Promise = require('promise-polyfill');
  }

  if (!g.regeneratorRuntime) {
    g.regeneratorRuntime = require('regenerator-runtime/runtime');
  }
} else {
  console.warn('请确认关闭小程序选项 "关闭ES6转ES5"');
}