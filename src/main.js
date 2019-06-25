// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';

// Font awesome imports
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone, faFile } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Vue imports
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

// Bootstrap
Vue.use(BootstrapVue);

// Font awesome config
library.add(faEnvelope, faPhone, faGithub, faLinkedin, faFile, faIdCard);
Vue.component('font-awesome-icon', FontAwesomeIcon);
dom.watch();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App),
}).$mount('#app');
