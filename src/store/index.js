import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../main'

Vue.use(Vuex)

// realtime firebase
db.collection("postsCollection").orderBy('createdOn', 'desc').onSnapshot(snapshot => {
  let postsArray = []

  snapshot.forEach(doc => {
    let post1 = doc.data().post
    postsArray.push(post1)
  })
  store.commit('setPosts', postsArray)
})

const store = new Vuex.Store({
  state: {
    userProfile: {},
    posts: []
  },
  mutations: {
    setPosts(state, val) {
      state.posts = val
    }
  }
})

export default store