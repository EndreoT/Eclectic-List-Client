<template>
  <div
    id="page-content"
    class="container"
  >
    <PageTitle :page-title="pageTitle" />

    <!-- All users -->
    <UnorderedList
      :view="view"
      :list="users"
      :list-name="listName"
      :total-items="totalUsers"
    />

    <!-- <div v-if="error">
      <h1>{{error}}</h1>
    </div>-->

    <ResourceRetrievalError
      v-if="error"
      :error="error"
    />
  </div>
</template>

<script>
import { getUsers } from '../API/API';
import ResourceRetrievalError from '../components/ResourceRetrievalError';
import UsersItemView from '../components/UsersItemView';
import UnorderedList from '../components/UnorderedList';
import PageTitle from '../components/PageTitle';

export default {
  name: 'Users',
  components: { PageTitle, ResourceRetrievalError, UnorderedList },
  data: () => ({
    users: [],
    pageTitle: 'All Users',
    listName: 'users',
    view: UsersItemView,
    error: '',
  }),
  computed: {
    totalUsers() {
      return this.users.length;
    },
  },
  async mounted() {
    try {
      const response = await getUsers();
      if (response.status === 200) {
        this.users = response.data;
      } else {
        this.error = response.data.message;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
