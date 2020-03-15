import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import App from './App.vue';
import router from './router';
import store from './store';
import { provideRouter } from './router/provideRouter';

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);

new Vue({
  router,
  store,
  setup() {
    provideRouter(router);
  },
  render: (h) => h(App),
}).$mount('#app');
