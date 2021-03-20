<template>
    <h1>Blog post should render here, but i need to be able to get the props. I need vuex to do this</h1>
</template>


<script> 
// console.log(this.$router.params)
export default {
  name: 'IndividualPost',
  props: ['items']
}
</script>