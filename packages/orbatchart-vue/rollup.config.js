// rollup.config.js
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import pkg from "./package.json";


const config = {
  input: 'src/index.js',
  output: {
    name: 'OrbatChart',
    exports: 'named',
    globals: {
      'vue': 'Vue',
      'orbatchart': 'OrbatChart'
    },
  },
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    vue({
      css: true,
      compileTemplate: true,
    }),
    buble(),
  ],
};

export default config;
