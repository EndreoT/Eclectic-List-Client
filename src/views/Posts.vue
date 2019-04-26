<template>
  <div class="container" id="page-content">
    <PageTitle :pageTitle="pageTitle"></PageTitle>

    <!-- All posts list -->
    <UnorderedList :view="view" :list="posts" :listName="listName" :totalItems="totalPosts"></UnorderedList>

    <ResourceRetrievalError v-if="error" :error="error"></ResourceRetrievalError>
  </div>
</template>

<script>
import { getAllPosts } from "../API/API";
import PostsItemView from "../components/PostsItemView";
import UnorderedList from "../components/UnorderedList";
import ResourceRetrievalError from "../components/ResourceRetrievalError";
import PageTitle from "../components/PageTitle";

export default {
  name: "posts",
  components: { PageTitle, ResourceRetrievalError, UnorderedList },
  data: () => ({
    posts: [],
    pageTitle: "All Posts",
    listName: "posts",
    view: PostsItemView,
    error: ""
  }),
  computed: {
    totalPosts() {
      return this.posts.length;
    }
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
  }
};
</script>
