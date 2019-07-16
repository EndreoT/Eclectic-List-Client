<template>
  <div class="container" id="page-content">
    <h1 id="page-title">About</h1>
    <div class="container" id="content">
      <h2>Description</h2>

      <p class="text-left">
        Eclectic List is a
        full stack web application that lets users create posts to sell items that can include images,
        comment on other posts, and choose profile avatar images.
        This website draws inspiration from sites as
        <a
          href="https://seattle.craigslist.org/"
          target="_blank"
        >Craigslist</a> and
        <a href="https://www.reddit.com/" target="_blank">Reddit</a>.
      </p>

      <h2>Technical Points</h2>
      <p class="text-left">
        This app implements the MEVN stack, which stands for
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
      </p>
      <a
        href="https://github.com/EndreoT/Eclectic-List-Server"
        class="btn btn-primary btn-lg mx-1"
        role="button"
        aria-disabled="true"
        target="_blank"
      >Server code repository</a>
      <a
        href="https://github.com/EndreoT/Eclectic-List-Client"
        class="btn btn-primary btn-lg mx-1"
        role="button"
        aria-disabled="true"
        target="_blank"
      >Client code repository</a>

      <!-- Bio -->
      <h2>Bio for Tristan Endreo</h2>
      <p class="text-left">
        Full stack and backend software developer looking forward to building software that helps improve the lives of people.
        Strong experience in object-oriented languages including JavaScript and Python, as well as technologies such as Node.js, Django, React, Vue.js, and Typescript.
        Brings to the team a fast and motivated learner, a collaborative team player, and the ability to clearly teach complex ideas to others.
        Graduate of University of Washington Full Stack Certificate in addition to over a year of prior programming experience in Python.
      </p>
      <p class="text-left">
        Born and raised in Seattle, WA, I love the North West. My interests include improving my
        programming
        skills, rock climbing, running, and spending time with friends.
      </p>

      <!-- Contact Section -->
      <section class="page-section" id="contact">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="mt-0">Let's Get In Touch</h2>
              <hr class="divider my-4" />
              <p class="text-muted mb-5">Contact Tristan</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-2 ml-auto text-center mb-5 mb-lg-0">
              <svg class="fas fa-phone fa-3x mb-3 text-muted" />
              <div>+1 (206) 962-0600</div>
            </div>
            <div class="col-lg-2 mr-auto text-center">
              <svg class="fas fa-envelope fa-3x mb-3 text-muted" />
              <!-- Make sure to change the email address in anchor text AND the link below! -->
              <a class="d-block" href="mailto:endreotm@gmail.com">endreotm@gmail.com</a>
            </div>
            <div class="col-lg-2 mr-auto text-center">
              <svg class="fab fa-github fa-3x mb-3 text-muted" />
              <a class="d-block" href="https://github.com/EndreoT" target="_blank">Github</a>
            </div>
            <div class="col-lg-2 mr-auto text-center">
              <svg class="fab fa-linkedin fa-3x mb-3 text-muted" />
              <a
                class="d-block"
                href="https://www.linkedin.com/in/tristan-endreo/"
                target="_blank"
              >LinkedIn</a>
            </div>
            <div class="col-lg-2 mr-auto text-center">
              <svg class="fas fa-file fa-3x mb-3 text-muted" />
              <a
                class="d-block"
                href="https://docs.google.com/document/d/1x0fQuCv6e3jpvP5Hmhu54XOtMCv6_cJJfCLrqIBn6d8/edit"
                target="_blank"
              >Resume</a>
            </div>
            <div class="col-lg-2 mr-auto text-center">
              <svg class="far fa-id-card fa-3x mb-3 text-muted" />
              <a
                class="d-block"
                href="https://endreot.github.io/Portfolio/"
                target="_blank"
              >Portfolio</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
#content {
  padding-bottom: inherit;
}
</style>
