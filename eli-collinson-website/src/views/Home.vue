<template>
  <div id="mainPageDiv">
    <h1>Eli's Awesome Site</h1>
    <div id="intro-and-portrait-container">
      <div id="camping-portrait-container">
        <img alt="standing in the road" src="../assets/Camping-9.jpg" id="camping-portrait">
      </div>
      <div id="site-text">
      <div id="site-introduction">
        <p class="left-justified"> I am a recent .NET Core Full Stack Development Bootcamp Grad looking for work! If you like this site shoot me an email at elicollinson1@gmail.com. </p>
      </div>
      <div id="bootcamp-info">
        <p>Here is the bootcamp I went through:</p>
        <a href="https://www.techelevator.com/columbus">Tech Elevator</a>
      </div>
      <div id="site-creation-info">
        <p>This site was built using vue.js with javascript, HTML5, CSS, and bootstrap.</p>
      </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#intro-and-portrait-container {
  /*display: grid;
  justify-content: center;
  grid-template-areas: "site-intro camping-portrait-container"
                       "bootcamp-info camping-portrait-container"
                       "site-creation-info camping-portrait-container";
                       */
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
}

#site-text{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#camping-portrait-container {
  /*grid-area: camping-portrait-container;*/
  max-width: 30%;
  background-color: #77867F;
  padding: 1rem;
  margin-right: 3rem;
}

#camping-portrait {
  max-width: 100%;
}

#site-introduction {
  /*grid-area: site-intro;*/
  text-align: left;
}

#bootcamp-info{
 /* grid-area: bootcamp-info;*/
}

#site-creation-info{
  /* grid-area: site-creation-info;*/
}

h3 {
  margin: 40px 0 0;
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
  color: #CD8987;
}

.left-justified {
  padding-left: 3rem;
  padding-right: 3rem;
}
* {
  color: #08415C;
}
</style>
