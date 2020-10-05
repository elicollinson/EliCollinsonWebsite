<template>
<div>
  <h1>My Story</h1>
  <div id="page-text" class="container-fluid">
  <div id="who-and-image">
  <div  id="who-i-am">
  <h2>Who I Am</h2>
  <p>I am a former rock climbing instructor and gym manager now turned software developer.
    I have been plugged into the tech world for a long time, including some coursework in Computer Science Engineering at Ohio State University, but I recently committed to the field in the form of a full stack bootcamp with Tech Elevator in Columbus.
  </p>
  <p>
    I went through the .NET core cohort there, where I learned the ins and outs of C#, MS SQL, Javascript, HTML5, CSS, and worked with the Vue.js framework.
    I love the creativity in coding, the problems are very technical, but there is a lot of room for creativity in solving them.
  </p>
  <p>
    I am a deep diver - I love to find the details of a topic and explore the nuances of what makes it up. Software seems endlessly deep and complex at this stage of my career. I have been diving deeper in Vue in the past few weeks building this site, and I have loved the process of learning on my own.
  </p>
  </div>
  <img src="../assets/Camping-9.jpg" id="my-story-img"/>
  </div>
  <div id="why-site">
  <h2>Why This Site</h2>
  <p>I built this site in order to start building a portfolio of work coming out of my program, and as a project to work on and hone my skills. As of now, the site consists of this bio page, my home page, and a small gallery component. The gallery takes advantage of the magic of Vue.js, clicking a thumbnail will bring the photo up in the larger viewer above. My current planned additions are:</p>
  <ul>
    <li>Blog Page</li>
    <li>Site Speed Improvements (Especially the gallery)</li>
    <li>Gallery Image Arrows</li>
    <li>Better Mobile Formatting on the Gallery</li>
    <li>Contact Me Page</li>
    <li>Dynamic Site Animations</li>
  </ul>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MyStory'
}
</script>

<style scoped>
p {
  font-family: brandon-grotesque, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14pt;
  text-align: left;
}
h1 {
  font-family: brandon-grotesque, sans-serif;
  font-weight: 500;
  font-style: normal;
}
li {
  font-family: brandon-grotesque, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14pt;
  text-align: left;
}
h2 {
  text-align: left;
  font-family: brandon-grotesque, sans-serif;
  font-weight: 500;
  font-style: normal;
}
#page-text {
  max-width: 1024px;
}
#who-i-am {
  max-width: 100%;
  margin-top: 2rem;
}
#why-site {
  max-width: 100%;
}
#my-story-img {
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
}
#who-and-image {
  display: flex;
  flex-direction: column-reverse;
}
@media screen and (min-width: 770px) {
  #my-story-img {
  max-width: 30%;
  margin-left: 2rem;
}
#who-and-image {
  display: flex;
  flex-direction: row;
}
#my-story-img {
  max-width: 30%;
  margin-left: 2rem;
}
  }
</style>
