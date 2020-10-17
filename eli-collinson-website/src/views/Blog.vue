<template>
  <div class="container-fluid" id="blog">
      <h1>Known Issues</h1>
      <p>Welcome to known issues, my blog about development and the problems you solve in the process of creating software.
          The code for this blog has been entirely written by me, in an effort to work on responsiveness in a website. My goal here is to capture some aneqdotes and lessons as I learn them.
          I am admitedly new to code, so think of these posts as insight into the struggles and triumphs of a fledgling developer.
      </p>
      <blog-list-viewer />
  </div>
</template>

<script>
import BlogListViewer from '../components/BlogListViewer.vue'
export default {
  name: 'Blog',
  components: {
    BlogListViewer
  }
}
</script>

<style scoped>
#blog {
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
}
</style>
