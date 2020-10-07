<template>
  <div id="page-contents">
  <test-blog-post />
  </div>
</template>

<script>
import TestBlogPost from '../components/TestBlogPost.vue'
export default {
  name: 'BlogPost',
  components: {
    TestBlogPost
  }
}
</script>

<style>
p {
  font-family: brandon-grotesque, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14pt;
  text-align: left;
}
#page-contents {
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
}
h2 {
  margin-top: 1rem;
}
</style>
