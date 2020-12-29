<template>
<div class="container-fluid" id="gallery">
    <h1>Gallery</h1>
    <p>I moonlight as a photographer, so I've assembled some images here to put together a basic gallery component. Suggestions (<a href="mailto:elicollinson1@gmail.com" class="card-link">Email Me</a>) are welcome, especially in assisting with load speed, which is one of the next projects I will be taking on.</p>
    <!--<div id="large-image-div">-->
        <img v-bind:src="this.largeImage" class="large-image img-responsive">
    <!--</div>-->
    <div id="tiles-container">
    <div class="small-image-div">
        <img src="../assets/WebGallery-01.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/WebGallery-09.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/WebGallery-03.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/WebGallery-04.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/WebGallery-05.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/WebGallery-06.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/WebGallery-07.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/WebGallery-08.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <img src="../assets/WebGallery-02.jpg" class="small-image" v-on:click="SetLargeImage()">
    </div>
    <div class="small-image-div">
        <picture>
            <source srcset="../assets/WebGallery-10.jp2" type="image/jp2">
            <source srcset="../assets/WebGallery-10.jpg" type="image/jpeg">
        </picture>
    </div>
    <div class="small-image-div">
        <picture>
            <source srcset="../assets/WebGallery-11.jp2" type="image/jp2">
            <source srcset="../assets/WebGallery-11.jpg" type="image/jpeg">
        </picture>
    </div>
    <div class="small-image-div">
        <picture>
            <source srcset="../assets/WebGallery-12.jp2" type="image/jp2">
            <source srcset="../assets/WebGallery-12.jpg" type="image/jpeg">
        </picture>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      largeImage: require('../assets/WebGallery-01.jpg')
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
