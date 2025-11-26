// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from '#q-app/wrappers'

export default defineConfig(() => {
  return {

    css: ['app.css'],

    extras: [
      'roboto-font',
      'material-icons'
    ],

    build: {
      vueRouterMode: 'hash',
      distDir: 'docs',
      publicPath: '/ST/'
    },

    devServer: {
      open: true
    },

    framework: {
      config: {},
      plugins: []
    },

    animations: [],

  }
})
