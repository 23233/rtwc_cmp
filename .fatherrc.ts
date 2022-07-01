import { IBundleOptions } from 'father-build/src/types';

export default {
  esm: { type: 'babel', mjs: false, importLibToEs: true },
  cjs: { type: 'babel', lazy: true },
  // 目前看来没有必要打包出umd esm cjs就足够了
  // umd: {
  //   name: 'rtwc-cmp',
  //   minFile:true,
  //   globals: {
  //     react: 'React',
  //   },
  // },
  extractCSS: true,
  runtimeHelpers: true,
} as IBundleOptions;
