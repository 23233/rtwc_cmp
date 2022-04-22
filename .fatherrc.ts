import { IBundleOptions } from 'father-build/src/types';

export default {
  esm: { type: 'babel', mjs: true, importLibToEs: true },
  cjs: { type: 'babel', lazy: true },
  umd: {
    name: 'rtwc-cmp',
    globals: {
      react: 'React',
    },
  },
  extractCSS: true,
  runtimeHelpers: true,
} as IBundleOptions;
