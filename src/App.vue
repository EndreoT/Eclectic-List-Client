<template>
  <div id="app">
    <!-- Site Header -->
    <header
      id="header"
      class="container-fluid"
    >
      <div class="row justify-content-md-center">
        <div class="col-sm-12">
          <h1 id="site-name">
            <router-link
              id="site-name-link"
              to="/"
              href="#"
            >
              Eclectic List
            </router-link>
          </h1>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <h6>(It may take up to 10 seconds to load content initially. Thank you for your patience.)</h6>
      </div>

      <!-- Navigation -->
      <div
        id="navigation"
        class="row justify-content-md-center"
      >
        <nav class="navbar bg-light">
          <ul class="nav">
            <li class="nav-item">
              <router-link
                to="/about"
                class="nav-link"
                href="#"
              >
                About
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/categories"
                class="nav-link"
                href="#"
              >
                Categories
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/posts"
                class="nav-link"
                href="#"
              >
                Posts
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/users"
                class="nav-link"
                href="#"
              >
                Users
              </router-link>
            </li>

            <!-- Show links if not authenticated -->
            <li
              v-if="!authenticated"
              class="nav-item"
            >
              <router-link
                to="/login"
                class="nav-link"
                href="#"
              >
                Login
              </router-link>
            </li>
            <li
              v-if="!authenticated"
              class="nav-item"
            >
              <router-link
                to="/signup"
                class="nav-link"
                href="#"
              >
                Signup
              </router-link>
            </li>

            <!-- Show links if authenticated -->
            <li
              v-if="authenticated"
              class="nav-item"
            >
              <router-link
                to="/createpost"
                class="nav-link"
                href="#"
              >
                Create Post
              </router-link>
            </li>
            <li
              v-if="authenticated"
              class="nav-item"
            >
              <router-link
                to="/user"
                class="nav-link"
                href="#"
              >
                Profile
              </router-link>
            </li>
            <li
              v-if="authenticated"
              class="nav-item"
            >
              <label class="nav-link">Logged in as: {{ username }}</label>
            </li>
          </ul>
        </nav>

        <!-- Show drop down utility if authenticated -->
        <div
          v-if="authenticated"
          id="dropdown-container"
          class="btn-group"
        >
          <AvatarImage :user="user" />

          <div>
            <b-dropdown
              id="dropdown-1"
              text="Settings"
              class="m-md-2"
            >
              <b-dropdown-item>
                <router-link
                  to="/avatar"
                  class="nav-link"
                  href="#"
                >
                  Choose Avatar Image
                </router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <button
                  id="logout"
                  class="btn btn-primary"
                  @click="logout"
                >
                  Logout
                </button>
              </b-dropdown-item>
              <b-dropdown-divider />
            </b-dropdown>
          </div>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
import AvatarImage from './components/AvatarImage';

export default {
  name: 'App',
  components: { AvatarImage },
  computed: {
    authenticated() {
      return this.$store.getters['auth/authStatus'];
    },
    username() {
      return this.$store.getters['auth/username'];
    },
    user() {
      return this.$store.getters['auth/user'];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/deleteAuthState');
      this.$router.push('/categories');
    },
  },
};
</script>

<style>
@import "../public/style.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#site-name {
  background-color: #4aaaa5;
  padding: 20px;
}

#site-name-link {
  color: white;
}

#header {
  background: #f8f9fa !important;
  margin-bottom: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#page-content {
  background-color: #4aaaa5;
  margin-bottom: 100px;
  padding-bottom: 15px;
}

#dropdown-container {
  height: 100px;
}

#user-settings {
  height: 50px;
}

#logout {
  position: relative;
  left: 25%;
}

#page-title {
  color: white;
}

#content {
  background-color: white;
}

.avatar-image {
  height: 100px;
  width: auto;
  border: solid 1px white;
}

.post-image {
  height: 150px;
  width: auto;
}
</style>
