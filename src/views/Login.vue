<template>
  <div class="container" id="page-content">
    <h1 id="page-title">Login</h1>

    <div class="container" id="content">
      <!-- Login form -->
      <form @submit.prevent="login">
        <div v-if="error" class="alert alert-dismissible alert-warning">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <p class="mb-0">{{error}}</p>
        </div>

        <!-- Username -->
        <div class="form-group">
          <label for="inputEmail">Email</label>
          <input
            v-model="data.email"
            type="text"
            class="form-control"
            id="inputEmail"
            placeholder="Enter your email"
            required
          >
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
import { login } from '../API/API';

export default {
  name: 'login',
  data: () => ({
    error: '',
    data: {
      email: '',
      password: '',
    },
  }),
  methods: {
    async login() {
      try {
        const response = await login(this.data);
        if (response.status === 200) {
          // Login successful
          const { user } = response.data;
          this.$store.dispatch('auth/createAuthState', {
            user,
            username: user.username,
            id: user._id,
            jwt: response.data.token,
          });
          this.$router.push(`/user/${user.username}`);
        } else {
          // Login unsuccessful
          this.error = response;
        }
      } catch (error) {
        this.$store.dispatch('auth/deleteAuthState');
        console.log(error);
      }
    },
  },
};
</script>

<style>
#submit-button {
  margin-bottom: 15px;
}
</style>
