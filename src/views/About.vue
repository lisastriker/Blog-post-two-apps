<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    redirect () {
      this.$router.push('/about')
    }
  }
}
</script>
