<template>
    <div>
        <h4>{{this.blogpost}}</h4>
        <h4>Created on : {{this.createdOn}}</h4>
    </div>
</template>


<script> 
import {db} from '../main'
// console.log(this.$router.params)
export default {
  name: 'IndividualPost',
  data(){
      return{
          docid:'',
          blogpost:'',
          createdOn: ''
      }
  },
  created(){
      let uri=window.location.href.split('/');
      this.docid=uri[5]
      const docRef = db.collection("postsCollection").doc(this.docid)
      docRef.get().then((doc) => {
    if (doc.exists) {
        this.blogpost = doc.data().post;
        this.createdOn = doc.data().createdOn;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }).catch((error) => {
    console.log("Error getting document:", error);
    });

  },
}
</script>