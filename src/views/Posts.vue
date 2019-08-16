<template>
  <div
    id="page-content"
    class="container"
  >
    <PageTitle :page-title="pageTitle" />

    <!-- All posts list -->
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
import { getAllPosts } from '../API/API';
import PostsItemView from '../components/PostsItemView';
import UnorderedList from '../components/UnorderedList';
import ResourceRetrievalError from '../components/ResourceRetrievalError';
import PageTitle from '../components/PageTitle';

export default {
  name: 'Posts',
  components: { PageTitle, ResourceRetrievalError, UnorderedList },
  data: () => ({
    posts: [],
    pageTitle: 'All Posts',
    listName: 'posts',
    view: PostsItemView,
    error: '',
  }),
  computed: {
    totalPosts() {
      return this.posts.length;
    },
  },
  async mounted() {
    try {
      const response = await getAllPosts();
      if (response.status === 200) {
        this.posts = response.data;
      } else {
        this.error = response.data.message;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
