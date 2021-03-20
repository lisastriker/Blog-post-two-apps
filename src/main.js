import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import Modal from "@burhanahmeed/vue-modal-2"
var firebaseConfig = {
  apiKey: "AIzaSyC5ZvqEagUcTnmZp0NaTUIXSWjF0Mdj91o",
  authDomain: "vue-blog-post-v.firebaseapp.com",
  projectId: "vue-blog-post-v",
  storageBucket: "vue-blog-post-v.appspot.com",
  messagingSenderId: "740728734170",
  appId: "1:740728734170:web:875a58750a026fcdc340e3"
};
firebase.initializeApp(firebaseConfig)

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    next('/');
  } else if(requiresAuth && currentUser) {
    next()
  } else{
    next()
  }
})
export const db = firebase.firestore()
export const auth = firebase.auth()

Vue.config.productionTip = false
Vue.use(Modal)
firebase.auth().onAuthStateChanged(function (user) {
  user
  new Vue({
    vuetify,
    router,
    render: h => h(App)
  }).$mount('#app') 
})
   