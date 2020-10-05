<template>
  <div id="mainPageDiv">
    <div id="intro-and-portrait-container">
      <div id="eli-portrait-container" class="container">
        <img alt="standing in the road" src="../assets/EliHeadshot.jpg" id="eli-portrait" class="img-responsive">
      </div>
      <div id="site-text" class="container">
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">About Me</h5>
    <p class="card-text">I am a recent .NET Core Full Stack Development Bootcamp Grad looking for work! If you like this site shoot me an email.</p>
    <a href="mailto:elicollinson1@gmail.com" class="card-link">Email Me</a>
  </div>
      </div>
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">My Bootcamp</h5>
    <p class="card-text">Want more info about the bootcamp I went through? Click here:</p>
    <a href="https://www.techelevator.com/columbus" class="card-link">Tech Elevator</a>
  </div>
        </div>
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">I Built This Site</h5>
    <p class="card-text">This site was built using vue.js with Javascript, HTML5, CSS, and bootstrap.</p>
    <a href="https://drive.google.com/file/d/1heUoUmBAKrLGCyn6CqI0rkaH5gcuGK11/view?usp=sharing" target="_blank">My Resume</a>
  </div>
      </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    openResume () {
      window.open('../assets/Eli_Collinson_Resume.pdf', '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#intro-and-portrait-container {
  /*display: grid;
  grid-template-areas: "site-intro camping-portrait-container"
                       "bootcamp-info camping-portrait-container"
                       "site-creation-info camping-portrait-container";
                       */
  /*display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;*/
   justify-content: center;
}

#site-text{
  display: flex;
  flex-direction: column;
}
.card {
  width: 50%;
  margin: 0 auto;
}

#eli-portrait-container {
  /*grid-area: camping-portrait-container;*/
  max-width: 100%;
  /*background-color: #33673B;*/
  padding: 1rem;
  margin-right: 3rem;
}

#eli-portrait {
  max-width: 65%;
}

#bootcamp-info{
 /* grid-area: bootcamp-info;*/
}

#site-creation-info{
  /* grid-area: site-creation-info;*/
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #8B0000;
  font-family: brandon-grotesque, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14pt;
}
/*
.left-justified {
  padding-left: 3rem;
  padding-right: 3rem;
}*/
@media screen and (min-width: 480px) {
  #site-text{
    flex-direction: row;
  }

}
h5 {
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
