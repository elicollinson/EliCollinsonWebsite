<template>
<div>
    <h2>A Blog Post About Blogs</h2>
    <div id="blog-content">
    <div id="blog-image">
      <img src="../assets/CodeScreenshot.png" alt="Screenshot of computer code"/>
    </div>
    <div id="blog-text">
    <p>Welcome to the first post on Known Issues! The most pressing issue I want to talk about here is the complex nature of blogs themselves.</p>
    <p>
        When I put this on my todo list, I knew that many people use modern CMS systems to create blogs, but I find the best way to learn is tackling big challenges, so I decided to attempt to put mine together myself.I've built basic sites on wordpress before, so I am familiar with the general flow and feel of most blogs. As I've started to build my own, I've discoverd there was a lot I took for granted in those tools.
    </p>
    <p>Another complication, is the fact that I'm building this site with a front end framework, like a mini web app, so the javascript and state management has been a little trickier. Right now, there is no database for the site, so figuring out how best to store the posts and have a central blog page listing them has been a challenge. My plan has been to make each post its own component, which will be rendered inside a blog post view for formatting. One thing I did learn about Vue.js is that I can style content from a component in a view, as long as my selectors and class names are all correct. Right now everything is hard coded into components.</p>
    <p>The trouble is, in order to load the post, I need to be able to read the image url and content in as an object, so my options are to create a list of post objects in the global vuex state, or to read the post content into the app via an id sent in a created method.
The first option seems fine, but I worry about it slowing site-wide performance (a topic where I am in in over my head). The second option is what I am leaning towards, as it would also make populating the post list easier, as I could read in the names and images of all posts to create the list.
</p>
<p>Either option runs into the same problem, when I click a post in the list, and the blog post view loads, how do I make sure the right component loads into the view? My current solution is using v-if statements to only render the correct component and bool variables set in a created method,
but more research is needed to determine if that effects site efficiency.</p>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'BlogPostAboutBlogPosts'

}
</script>

<style scoped>

</style>
