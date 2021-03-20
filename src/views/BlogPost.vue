<template>
  <div class="container">
  <button id="add" v-on:click="open">Add post</button>
  <button id="logout" v-on:click="logOut">Log Out</button>
  <div class="BlogPost">
    <h3>Welcome to your dashboard {{this.name}}</h3>
    <ul>
    <li class="indivList" v-for="item in this.items" :key="item.id">
      <router-link :to="{name:'IndividualPost', params: {id:item.id}}">
      {{ item.data().post }}
      {{ item.data().createdOn}}
      </router-link>
      <img id="deleteicon" src="../assets/delete.png" v-on:click="deleteDocument(item.id)" />
    </li>
     </ul>
    <vue-modal-2 :headerOptions="{title: 'Blog Post'}"
    :footerOptions="{
        btn1OnClick: () => createPost(),
        btn2OnClick: () => close(),
        btn1: this.submit,
        btn2: this.cancel,
    }"
      name="modal-1" @on-close="close">
    <textarea v-model="message" placeholder="Add content here"></textarea>
    </vue-modal-2>
  </div>
  </div>
</template>

<style>
li{
  border:solid 2px black;
  padding:10px;
}

#deleteicon{
  width:20px;
  height:20px;
}

#deleteicon:hover{
  cursor:pointer;
}

.indivList:hover{
  background: #fed8b1;
}

#logout{
  background:orange;
  display:inline-block;
  margin-left:80%;
  border: black 2px solid;
  padding:10px;
  border-radius: 5px;
}

#add{
  background:orange;
  display:inline-block;
  margin-left:0%;
  border: black 2px solid;
  padding:10px;
  border-radius: 5px;
}

textarea{
  height:100%;
  width:100%;
  padding-left:10px;
}
</style>

<script>
import { db, auth } from '../main.js'

const items = []
export default {
  name: 'BlogPost',
  data () {
    return {
      submit: 'submit',
      cancel: 'cancel',
      message: '',
      items: [],
      itemIds: [],
      count: 1,
      showModal: false,
      name: auth.currentUser.email
    }
  },
  created () {
    db.collection('postsCollection').onSnapshot((querySnapshot) => {
      this.items = []
      querySnapshot.forEach((doc) => {
        this.items.push(doc)
        console.log(`${doc.id} => ${doc.data().post}`)
        console.log(items)
      })
    })
  },
  methods: {
    open () {
      this.$vm2.open('modal-1')
    },
    close () {
      this.$vm2.close('modal-1')
    },
    createPost () {
      const date = new Date()
      const dateString = date.toUTCString()
      db.collection('postsCollection').add({
        post: this.message,
        createdOn: dateString
      }).then(() => {
        this.count += 1,
        this.message = ''
        this.$vm2.close('modal-1')
      })
    },
    logOut () {
      auth.signOut().then(() => this.$router.push('/'))
    },
    deleteDocument (id) {
      db.collection('postsCollection').doc(id).delete()
    },
    updateCollection () {
      db.collection('postsCollection').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.items.push(doc)
          console.log(`${doc.id} => ${doc.data().post}`)
          console.log(items)
        })
      })
    }
  }
}
</script>
