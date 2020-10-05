<template>
<div class="container-fluid" id="gallery">
    <h1>Gallery</h1>
    <p>I moonlight as a photographer, so I've assembled some images here to put together a basic gallery component. Suggestions (<a href="mailto:elicollinson1@gmail.com" class="card-link">Email Me</a>) are welcome, especially in assisting with load speed, which is one of the next projects I will be taking on.</p>
    <!--<div id="large-image-div">-->
        <img v-bind:src="this.largeImage" class="large-image img-responsive">
    <!--</div>-->
    <div id="tiles-container">
    <div class="small-image-div">
        <img src="../assets/boulderthoughts.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/2.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/3.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/4.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/5.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/6.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/7.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/8.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/9.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/10.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/11.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/12.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      largeImage: require('../assets/boulderthoughts.jpg')
    }
  },
  methods: {
    SetLargeImage (imgURL) {
      this.largeImage = event.target.getAttribute('src')
    }
  }
}
</script>

<style>
#gallery {
    max-width: 1024px;
}
.small-image-div {
    flex: 0 1 200px;
    margin: 1rem;
    object-fit: cover;
}
.small-image {
max-width: 100%;
}
#tiles-container {
    margin: 1rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
#large-image-div {
    margin: 1rem;
    max-width: 50%;
    max-height: 50%;
}
.large-image{
    max-width: 75%;
    max-height: 500px;
    margin-left: auto;
    margin-right: auto;
}
h1 {
  font-family: brandon-grotesque, sans-serif;
  font-weight: 500;
  font-style: normal;
}
p {
  font-family: brandon-grotesque, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14pt;
}
</style>
