<template>
  <div
    id="page-content"
    class="container"
  >
    <PageTitle :page-title="pageTitle" />

    <!-- Show posts for category -->
    <UnorderedList
      :view="view"
      :list="posts"
      :list-name="listName"
      :total-items="totalPosts"
    />

    <ResourceRetrievalError
      v-if="error"
      :error="error"
    />
  </div>
</template>

<script>
import ResourceRetrievalError from '../components/ResourceRetrievalError';
import CategoryView from '../components/CategoryView';
import UnorderedList from '../components/UnorderedList';
import PageTitle from '../components/PageTitle';

import { getCategory, getPosts, getPostsForCategory } from '../API/API';

export default {
  name: 'Category',
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
