<template>
  <div id="page-contents">
  <test-blog-post  v-if="this.ShowTestBlogPost"/>
  <blog-post-about-blogs  v-if="this.ShowBlogPostAboutBlogs"/>
  <the-easy-way-out-is-a-trap v-if="this.ShowTheEasyWayOut"/>
  </div>
</template>

<script>
import TestBlogPost from '../components/TestBlogPost.vue'
import BlogPostAboutBlogs from '../components/BlogPostAboutBlogs.vue'
import TheEasyWayOutIsATrap from '../components/TheEasyWayOutIsATrap.vue'

export default {
  data () {
    return {
      ShowTestBlogPost: false,
      ShowBlogPostAboutBlogs: false,
      ShowTheEasyWayOut: false
    }
  },
  name: 'BlogPost',
  components: {
    TestBlogPost,
    BlogPostAboutBlogs,
    TheEasyWayOutIsATrap
  },
  created () {
    if (this.$route.params.postId === '1') {
      this.ShowTestBlogPost = true
    } else if (this.$route.params.postId === '2') {
      this.ShowBlogPostAboutBlogs = true
    } else if (this.$route.params.postId === '3') {
      this.ShowTheEasyWayOut = true
    }
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
#blog-image {
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}
#blog-content {
  display: flex;
  flex-direction: column;
}
img {
  max-width: 100%;
}
#blog-text {
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: left;
}
</style>
