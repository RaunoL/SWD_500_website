// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import './sass/main.scss'
// import './sass/layout/_grid.scss'
// import './sass/layout/_header.scss'
// import './sass/layout/_navigation.scss'
// import './sass/abstracts/_variables.scss'
// import './sass/base/_typography.scss'
// import './sass/pages/_index.scss'
// import './sass/components/_buttons.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { hero },
  template: '<hero/>'
})
