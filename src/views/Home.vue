<template>
  <div class="home">   
  <form class="home" @submit.prevent="login">     
    <h2>Login</h2>     
    <input       
      type="email"       
      placeholder="Email address..."       
      v-model="email"     
    />     
    <input       
      type="password"       
      placeholder="password..."       
      v-model="password"     
    />     
    <button type="submit">
       Login
    </button>   
  </form> 
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'

//Post
export default {
  name: 'Home',
  data(){
    return {
      email: '',
      password: '',
    };
  },
  methods:{
    login() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.$router.push('blog/me')
      })
      .catch(error => {
        alert(error.message);
      });
    },
  }
}
</script>
