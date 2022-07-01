import { IBundleOptions } from 'father-build/src/types';

export default {
  esm: { type: 'babel', mjs: false, importLibToEs: true },
  cjs: { type: 'babel', lazy: true },
  umd: {
    name: 'rtwc-cmp',
    globals: {
      react: 'React',
      'react-dom': 'ReactDom',
      'react-router-dom': 'ReactRouterDom',
    },
  },
  extractCSS: true,
  runtimeHelpers: true,
} as IBundleOptions;
