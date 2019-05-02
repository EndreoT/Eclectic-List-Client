<template>
  <div class="container" id="page-content">
    <h1 id="page-title">About</h1>
    <div class="container" id="content">
      <h2>Description</h2>

      <p class="text-left">
        Eclectic List is a
        <strong>concept</strong> full stack web application for creating posts for selling items that can include images,
        comment on user posts, and choose profile avatar images.
        This website draws inspiration from sites as
        <a
          href="https://seattle.craigslist.org/"
          target="_blank"
        >Craigslist</a> and
        <a href="https://www.reddit.com/" target="_blank">Reddit</a>. The intent of this website is to showcase a full stack web application built by
        <a
          href="https://www.linkedin.com/in/tristan-endreo/"
          target="_blank"
        >Tristan Endreo</a>, specifically the Node.js backend.
        Currenly, the intent is not for users to actually post real items for sale on this site. Instead, please feel free to
        register a 'mock' profile, create, edit, and delete posts, and comment on any post to better view Tristan's skills as
        a full stack and backend web developer.
      </p>

      <h2>Technical Points</h2>
      <p class="text-left">
        This app uses the MEVN stack, which stands for
        <a
          href="https://www.mongodb.com/"
          target="_blank"
        >MongoDB</a> for the database,
        <a href="https://expressjs.com/" target="_blank">Express.js</a> for the web server framework,
        <a href="https://vuejs.org/" target="_blank">Vue.js</a> for the frontend framework,
        and
        <a
          href="https://nodejs.org/en/"
          target="_blank"
        >Node.js</a> for the run-time environment.
        Securely access protected routes using a 
        <a
          href="https://jwt.io/"
          target="_blank"
        >JSON Web Token (JWT)</a>, and backend authentication is routed through the
        <a
          href="http://www.passportjs.org/"
          target="_blank"
        >Passport.js</a> middleware.
        The
        <a href="https://vuex.vuejs.org/" target="_blank">Vuex</a> library for Vue allows for persistent user login.
        Lastly, images are stored using
        <a
          href="https://cloudinary.com/"
          target="_blank"
        >Cloudinary</a> hosting.
      </p>

      <p class="text-left">
        This app is hosted on two
        <a href="https://www.heroku.com/" target="_blank">Heroku</a> apps:
        First, the server side creates a RESTful API. An example of the the '/api/posts' endpoint can be found
        <a
          href="https://eclectic-list-server.herokuapp.com/api/posts"
          target="_blank"
        >here</a>. Second, the Vue.js app is also served by an Express.js server on Heroku.

      <h2>Bio for Tristan Endreo</h2>
      <p class="text-left">
        Full stack and backend software developer looking forward to building scalable software that helps improve the lives of people.
        Strong experience in object-oriented languages including JavaScript and Python, as well as frameworks such as Node.js and Vue.js.
        Brings to the team a fast and motivated learner, a strong team player, and the ability to clearly teach complex ideas to others.
        Currently developing a full stack website for fun using the MEVN stack which allows users to make posts for selling items.
      </p>
      <p class="text-left">
        Born and raised in Seattle, WA, I love the North West. My interests include improving my
        programming
        skills, rock climbing, running, and spending time with friends.
      </p>

      <div class="card bg-light mb-3 border-secondary">
        <div class="card-body">
          <h5 class="card-title text-center">Contact information</h5>
          <div class="text-left">
            <p class="card-text">Tristan Endreo</p>
            <p class="card-text">endreotm@gmail.com</p>
            <p class="card-text">
              <a
                href="https://drive.google.com/file/d/127uSoTOKZQej0yxdk9wYassOV76OySfx/view?usp=sharing"
                target="_blank"
              >Resume</a>
            </p>
            <p class="card-text">
              <a href="https://www.linkedin.com/in/tristan-endreo/" target="_blank">LinkedIn</a>
            </p>
            <p class="card-text">
              <a href="https://endreot.github.io/Bootstrap-Portfolio/" target="_blank">Portfolio</a>
            </p>
            <p class="card-text">
              <a href="https://github.com/EndreoT" target="_blank">Github</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>