import { resolve } from 'path'
import { defineConfig } from 'vite'

import wasm from "vite-plugin-wasm";

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'js/main.js'),
      name: 'hello',
      // the proper extensions will be added
      fileName: 'rustburn',
      formats: ['es']
    },
    target: 'esnext'
  },
  plugins: [
    wasm()
  ]
})
