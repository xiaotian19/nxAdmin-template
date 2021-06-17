// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 3,
      viewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: true,
      landscape: true, // 是否处理横屏情况
      landscapeUnit: 'vw', // (String) 横屏时使用的单位
      landscapeWidth: 2048// (Number) 横屏时使用的视口宽度
    },
  }
}
