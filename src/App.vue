<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/blog/me">Blog</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.home{
  display:flex;
  justify-content: center;
  width:100wh;
}

.form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height:100vh;
  width:40%;
  border:2px solid black;
  border-radius:5px;
}

.vm2__btn{
  background:orange;
  border:solid black 2px;
  border-radius:5px;
}
#vm2_box_modal-1{
  width:500px;
  height:500px;
}

.vm2_body{
  height:70%;
}
</style>
