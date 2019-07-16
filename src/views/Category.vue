<template>

  <div class="container" id="page-content">
    <PageTitle :pageTitle="pageTitle"></PageTitle>

    <!-- Show posts for category -->
    <UnorderedList :view="view" :list="posts" :listName="listName" :totalItems="totalPosts"></UnorderedList>

    <ResourceRetrievalError v-if="error" :error="error"></ResourceRetrievalError>
  </div>
</template>

<script>
import ResourceRetrievalError from '../components/ResourceRetrievalError';
import CategoryView from '../components/CategoryView';
import UnorderedList from '../components/UnorderedList';
import PageTitle from '../components/PageTitle';

import { getCategory, getPosts, getPostsForCategory } from '../API/API';

export default {
  name: 'category',
  components: { PageTitle, ResourceRetrievalError, UnorderedList },
  data: () => ({
    category: '',
    posts: [],
    pageTitle: '',
    listName: 'posts',
    view: CategoryView,
    error: '',
  }),

  computed: {
    totalPosts() {
      return this.posts.length;
    },
    categoryName() {
      return this.$route.params.category;
    },
  },
  async mounted() {
    await Promise.all([this.fetchCategory(), this.fetchPosts()]);
  },
  methods: {
    async fetchCategory() {
      try {
        const response = await getCategory(this.categoryName);
        if (response.status === 200) {
          // Success
          this.category = response.data;
          this.pageTitle = response.data.category;
        } else {
          this.error = response.message;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPosts() {
      try {
        const response = await getPostsForCategory(this.categoryName);
        if (response.status === 200) {
          this.posts = response.data;
        } else {
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
