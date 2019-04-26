<template>
  <div class="container" id="page-content">
    <h1 id="page-title">Signup</h1>

    <div class="container" id="content">

      <!-- Signup form -->
      <form @submit.prevent="registerUser">
        <div v-if="error" class="alert alert-dismissible alert-warning">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <p class="mb-0">{{error}}</p>
        </div>

        <!-- Username -->
        <div class="form-group">
          <label for="InputUsername1">Username</label>
          <input
            v-model="data.username"
            type="text"
            class="form-control"
            id="InputUsername"
            placeholder="Enter a username"
            required
          >
          <small id="Username" class="form-text text-muted">Note: Username will be publicly visible</small>
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="InputEmail">Email address</label>
          <input
            v-model="data.email"
            type="email"
            class="form-control"
            id="InputEmai1"
            placeholder="Enter email"
            required
          >
          <small
            id="Email"
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>
        </div>

        <!-- Password -->
        <div class="form-group">
          <label for="InputPassword">Password</label>
          <input
            v-model="data.password"
            type="Password"
            class="form-control"
            id="InputPassword"
            placeholder="Password"
            required
          >
        </div>
        <button id="submit-button" type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import {signup} from '../API/API'

export default {
  name: "about",
  data: () => ({
    error: "",
    data: {
      username: "",
      email: "",
      password: ""
    }
  }),
  methods: {
    async registerUser() {
      try {
        const response = await signup(this.data);
        if (response.status === 200) {
          // User creation success
          const user = response.data.user;
          this.$store.dispatch("auth/createAuthState", {
            user: user,
            username: user.username,
            id: user._id,
            jwt: response.data.token
          });
          this.$router.push(`/user/${user.username}`);
        } else {
          this.error = response.data.message;
        }
      } catch (error) {
        this.$store.dispatch("auth/deleteAuthState");
        console.log(error);
      }
    }
  }
};
</script>

<style>
#submit-button {
  margin-bottom: 15px;
}
</style>