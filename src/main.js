import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


library.add(faPaperPlane, faFacebookF, faTwitter, faInstagram, faYoutube, faPhoneFlip, faAngleUp, faAngleRight)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
