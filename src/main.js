import Vue from 'vue';
import "normalize.css"

import store from '@/store';
import App from '@/App.vue';
import router from '@/router';
import { auth } from '@/firebase';

import '@/assets/scss/app.scss';
import '@/assets/styles/index.css';
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
Vue.use(VueTextareaAutosize)
Vue.config.productionTip = false

/* eslint-disable no-new */
const unsubscribe = auth
  .onAuthStateChanged((firebaseUser) => {
    new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App),
      vuetify,

      created() {
        if (firebaseUser) {
          store.dispatch('fetchUserProfile', firebaseUser);
        }
      }
    })
    unsubscribe();
  });

