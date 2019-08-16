<template>
  <div class="container" id="page-content">
    <PageTitle :pageTitle="pageTitle"></PageTitle>

    <!-- Posts created by user -->
    <UnorderedList :view="view" :list="posts" :listName="listName" :totalItems="totalPosts"></UnorderedList>
  </div>
</template>

<script>
import { getUserByUsername, getPostsByUser } from '../API/API';

import ResourceRetrievalError from '../components/ResourceRetrievalError';
import UserPostsView from '../components/UserPostsView';
import UnorderedList from '../components/UnorderedList';
import PageTitle from '../components/PageTitle';

export default {
  name: 'user',
  components: { PageTitle, UnorderedList },
  data: () => ({
    posts: [],
    user: '',
    pageTitle: '',
    listName: 'posts',
    view: UserPostsView,
    error: '',
  }),
  computed: {
    userName() {
      return this.$route.params.user;
    },
    totalPosts() {
      return this.posts.length;
    },
  },
  async mounted() {
    await Promise.all([this.fetchUser(), this.fetchPosts()]);
  },
  methods: {
    async fetchUser() {
      try {
        const response = await getUserByUsername(this.userName);
        if (response.status === 200) {
          this.user = response.data;
          this.pageTitle = this.user.username;
        } else {
          this.error = response.data.message;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPosts() {
      try {
        const response = await getPostsByUser(this.userName);
        this.posts = response.data;
      } catch (error) {
        this.postsError = `No posts for post "${this.userName}" exist.`;
      }
    },
  },
};
</script>
