<template>
  <div class="BlogPost">
    <h1>This is a Blog Post page</h1>
    <button id="show-modal" @click="showModal = true">Add post</button>
    <modal v-if="showModal" @close="showModal = false">
    <h3>New Post</h3>
    </modal>
  </div>
</template>


<script>
export default {
  name: 'BlogPost',
}
</script>