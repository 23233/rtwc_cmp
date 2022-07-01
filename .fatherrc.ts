import { IBundleOptions } from 'father-build/src/types';

export default {
  esm: { type: 'babel', mjs: false, importLibToEs: true },
  cjs: { type: 'babel', lazy: true },
  // 目前看来没有必要打包出umd esm cjs就足够了 主要是umd会卡死 不知道什么问题 所以暂时跳过
  // umd: {
  //   name: 'rtwc-cmp',
  //   minFile:true,
  //   globals: {
  //     react: 'React',
  //   },
  // },
  // cssModules:true,
  lessInBabelMode: true, // babel 模式下做 less 编译
  extractCSS: true,
  runtimeHelpers: true,
} as IBundleOptions;
