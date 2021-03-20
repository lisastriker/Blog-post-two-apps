<template>
  <div class="BlogPost">
    <h1>This is a Blog Post page</h1>
      
    <button v-on:click="open">Add post</button>
    <vue-modal-2 :headerOptions="{title: 'Blog Post'}"
    :footerOptions="{
        btn1OnClick: () => createPost(),
        btn2OnClick: () => close(),
    }"  
      name="modal-1" @on-close="close">Hello from inside modal
    <textarea v-model="message" placeholder="Edit me"></textarea>
    </vue-modal-2>
  </div>
</template>

<style>
.container{
  width:200px;
  height:200px;
}
.modalContainer {
  border: solid black 2px;
  background-color: red;
}
</style>

<script>
let items = []
// import {mapState} from 'vuex'
import {db} from '../main.js'
export default {
  name: 'BlogPost',
  data(){
    return {
      message:'',
      showModal:false,
      itemCollection: items,
    };
  },
  created(){
    db.collection("postsCollection").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        items.push(doc.data().post)
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
      db.collection("postsCollection").add({
        post:this.message,
      }).then(this.$vm2.close('modal-1'))
    }

            //     <ul>
            //   {<li><a @click="viewPost(post)">view full post</a></li>}
            // </ul>
    // <div class="col2">
    //     <div v-if="posts.length">
    //       <div v-for="post in posts" :key="post" class="post">
    //         <span>{{ post.post}}</span>
    //       </div>
    //     </div>
    //   </div> 
  }
}
</script>
