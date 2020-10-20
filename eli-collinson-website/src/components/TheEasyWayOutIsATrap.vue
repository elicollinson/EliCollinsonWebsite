<template>
<div>
    <h2>The Easy Way Out Is A Trap</h2>
    <div id="blog-content">
    <div id="blog-image">
      <img src="../assets/ContactMe.png" alt="Screenshot of Contact Me Page"/>
    </div>
    <div id="blog-text">
    <p>Fittingly, this blog post is about the only other major piece of content I'm deploying with the blog, my contact page. I was looking into a contact page, because my experience with forms so far was entirely local.
I had built a server than ran on a local machine that passed data back and forth from a front end local npm server to a local database. No network involved. This was an excellent way to learn the handshakes required to get
a full stack application to work, but left me a little limited in knowing how to tackle a form on a public, non-local site.
</p>
    <p>
        Enter Netlify, my new best friend. I have been hosting my website through them, for free I might add, and I love their platform. It makes it very easy, I set the building directory in my github repo for the site, and then
every time I push changes to my remote repository it publishes the changes to my site. It also allows for a ton of free functionality, like build previews before publishing, A and B testing different formats of a site, and
most importantly in my case, form handling. The form handling was supposed to be a simple declaration in my form tag, along with some styling constraints, like having name values on the form and its inputs.
    </p>
    <p>Easy enough right?
Wrong.</p>
    <p>I am writing this post after around 10 hours of trying to get my form to work. Netlify to their credit has numerous posts and forums on their site dedicated to these issues, which have been very helpful throughout.
I am going to summarize briefly the process I went through. The first challenge was that the Netlify build bots need the html for the form to be rendered at the beginning of the build, which is a criteria that I
now know Vue does not support out of the box. I solved this by installing a pre-rendering plugin for Vue.js. This involved editing my webpack settings, which seem to take different forms and locations depending on
very short periods of times with Vue, but ultimately I got it installed, and set up in my vue.config.js file.
</p>
<p>Once that was setup, my whole site vanished at its web address.</p>
<p>It turned out that the plugin exports the html with the component name, and I had not configured it to also output an index.html file, so when Netlify was building the site, they did not know where to go. About an hour
later we were back up and running.</p>
<p>
Now the Netlify dashboard was showing the form! Progress, I knew success was right around the corner.</p>
<p>
I went to test the form submission, and... nothing. The form was redirecting to a built-in 404 page on submission and nothing was coming through on the dashboard. After another hour (or two) of poking around,
I found my way to a netlify article about configuring reactive Vue forms, and followed its instructions. Two new components, routing instructions, and custom axios query formatting later, we were set. The form now has a successful landing page
and a failure landing page, and was sending data to the dashboard. </p>
<p>Only there was a problem, the dashboard was recieving submission, with the correct data headers, but no data!</p>
<p>As of my writing this, I am waiting for help on the Netlify forums, hopefully someone there can get me sorted. To wrap up, I want to quickly summarize everything I learned taking on this challenge:</p>
<ul>
    <li>Netlify Forms</li>
    <li>Preloading Vue.js components</li>
    <li>Accessing the Vue webpack configuration</li>
    <li>Creating custom Axios request formatting</li>
    <li>Patience</li>
</ul>
<p>
The thing I love about this field is how much there is to learn, its always exciting to tackle challenges as rewarding as these, and learn so much along the way.</p>
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
