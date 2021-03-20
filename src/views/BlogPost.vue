<template>
  <div className="container">
  <button id="add" v-on:click="open">Add post</button>
  <button id="logout" v-on:click="logOut">Log Out</button>
  <div class="BlogPost">
    <h1>Welcome to your dashboard</h1>
    <ul>    
    <li v-for="item in this.items" :key="item.id">
      <router-link :to="{name:'IndividualPost', params: {id:item.id}, props:{ items: {post: item.data().post, createdOn: item.data().createdOn}}
        }">
      {{ item.data().post }}
      {{ item.data().createdOn}}
      </router-link>
    </li>
     </ul>
    <vue-modal-2 :headerOptions="{title: 'Blog Post'}"
    :footerOptions="{
        btn1OnClick: () => createPost(),
        btn2OnClick: () => close(),
    }"  
      name="modal-1" @on-close="close">Enter blog post
    <textarea v-model="message" placeholder="Edit me"></textarea>
    </vue-modal-2>
  </div>
  </div>
</template>

<style>
.container{
  width:100wh;
  height:100vh;
  display:flex;
}
.modalContainer {
  border: solid black 2px;
  background-color: red;
}

li{
  border:solid 2px black;
  padding:10px;
}

#logout{
  display:inline-block;
  margin-left:80%;
  border: black 2px solid;
  padding:5px;
  border-radius: 5px;
}

#add{
  display:inline-block;
  margin-right:0%;
  border: black 2px solid;
  padding:5px;
  border-radius: 5px;
}
</style>

<script>
let items = []
import {db} from '../main.js'
import {auth} from '../main.js'
export default {
  name: 'BlogPost',
  data(){
    return {
      message:'',
      items:[],
      itemIds:[],
      count:1,
      showModal:false,
    };
  },
  created(){
    db.collection("postsCollection").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        this.items.push(doc)
        console.log(`${doc.id} => ${doc.data().post}`);
        console.log(items)
    });
  });
  },
  methods:{
    open(){
      this.$vm2.open('modal-1')
    },
    close(){
      this.$vm2.close('modal-1')
    },
    createPost(){
      const date = new Date
      const dateString = date.toUTCString();
      db.collection("postsCollection").add({
        post:this.message,
        createdOn : dateString,
      }).then(()=>{
        this.count += 1,
        this.$vm2.close('modal-1')
        })
    },
    logOut(){
      auth.signOut().then(()=>this.$router.push('/'))
    }
  }
}
</script>

