import pxtorem from 'postcss-pxtorem';
const path = require('path');

const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  //path.resolve(__dirname, 'src/my-project-svg-foler'),  // 业务代码本地私有 svg 存放目录
];

export default {
  'entry': 'src/index.js',
  'disableCSSModules': false,
  'publicPath': '/',
  'autoprefixer': {
    'browsers': [
      'iOS >= 8',
      'Android >= 4'
    ]
  },
  'proxy': null,
  'extraPostCSSPlugins': [
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
    }),
  ],
  'extraBabelPlugins': [
    'transform-runtime',
    ['import', {
      'libraryName': 'antd-mobile',
      'style': true
    }]
  ],
  'env': {
    'development': {
      'extraBabelPlugins': [
        'dva-hmr'
      ]
    }
  },
  svgSpriteLoaderDirs: svgSpriteDirs,
};
