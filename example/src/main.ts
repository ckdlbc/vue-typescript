
import Vue from 'vue'
import App from 'components/pages/app'
import router from 'router'
import svgicon = require('vue-svgicon')

// import all icons
import 'components/icons'
Vue.use(svgicon, {
    tagName: 'icon'
})

new Vue({
    el: '#app',
    template: '<App/>',
    router,
    components: { App }
})