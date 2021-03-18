import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAQTLOSJ9z72SnWqx-4zOoC2faT4to1Qxw",
  authDomain: "vue-blog-authentication.firebaseapp.com",
  projectId: "vue-blog-authentication",
  storageBucket: "vue-blog-authentication.appspot.com",
  messagingSenderId: "844968348016",
  appId: "1:844968348016:web:1ff0665fd2cf988e53a7b5"
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
// const db = firebase.firestore()
// const auth = firebase.auth()
// const post = db.collection('post')
Vue.config.productionTip = false
firebase.auth().onAuthStateChanged(function (user) {
  user
  new Vue({
    vuetify,
    router,
    render: h => h(App)
  }).$mount('#app') 
})
   
