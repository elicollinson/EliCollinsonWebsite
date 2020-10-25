<template>
<div>
  <router-link v-bind:to="{path: '/blog/post/3'}">
    <div class="card mb-3">
  <img src="../assets/ContactMe.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">The Easy Way Out Is A Trap</h5>
    <p class="card-text">Lessons you can learn from a contact form.</p>
    <p class="card-text"><small class="text-muted">Last updated October 20th, 2020</small></p>
  </div>
</div>
    </router-link>
    <router-link v-bind:to="{path: '/blog/post/2'}">
    <div class="card mb-3">
  <img src="../assets/ThinCode.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">A Blog Post About Blogs</h5>
    <p class="card-text">Marvelling at the complexity of things we take for granted.</p>
    <p class="card-text"><small class="text-muted">Last updated October 9th, 2020</small></p>
  </div>
</div>
    </router-link>
</div>
</template>

<script>
export default {
  name: 'BlogListViewer'
}
</script>

<style scoped>
.card-img-top {
    height: 6rem;
    object-fit: cover;
}
a {
    margin-top: auto;
    margin-bottom: auto;
    font-family: brandon-grotesque, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14pt;
    color: black;
}
a:hover {
    text-decoration: none;
    color: #8B0000;
}
.post-image {
    width: 50%;
}
/* {
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
}*/

.post-title {
    width: 50%;
    display: flex;
    justify-content: center;
}
</style>
