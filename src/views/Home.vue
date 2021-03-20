<template>
  <div class="home">
  <form class="form" @submit.prevent="login">
    <h2>Login</h2>
    <input id="emailInput"
      type="email"
      placeholder="Email address..."
      v-model="email"
    />
    <input id="passwordInput"
      type="password"
      placeholder="password..."
      v-model="password"
    />
    <button id="loginButton" type="submit">
       Login
    </button>
  </form>
  </div>
</template>

<style>
#loginButton {
  background:orange;
  width:40%;
  padding:10px;
  border: 2px solid black;
}
#emailInput {
  width:40%;
  padding:10px;
  border: 2px solid black;
}
#passwordInput {
  width:40%;
  padding:10px;
  border: 2px solid black;
}
</style>

<script>
// @ is an alias to /src
import firebase from 'firebase'

// Post
export default {
  name: 'Home',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('blog/me')
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}
</script>
