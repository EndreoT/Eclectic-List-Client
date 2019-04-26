<template>
  <div class="container" id="page-content">
    <PageTitle :pageTitle="pageTitle"></PageTitle>

    <!-- Show all categories -->
    <UnorderedList
      :view="view"
      :list="categories"
      :listName="listName"
      :totalItems="totalCategories"
    ></UnorderedList>

    <ResourceRetrievalError v-if="error" :error="error"></ResourceRetrievalError>
  </div>
</template>

<script>
import { getCategories } from "../API/API";
import ResourceRetrievalError from "../components/ResourceRetrievalError";
import CategoriesItemView from "../components/CategoriesItemView";
import UnorderedList from "../components/UnorderedList";
import PageTitle from "../components/PageTitle";

export default {
  name: "categories",
  components: { PageTitle, ResourceRetrievalError, UnorderedList },
  data: () => ({
    categories: [],
    pageTitle: "All Categories",
    listName: "categories",
    view: CategoriesItemView,
    error: ""
  }),
  computed: {
    totalCategories() {
      return this.categories.length;
    }
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      try {
        const response = await getCategories();
        if (response.status === 200) {
          this.categories = response.data;
        } else {
          this.error = response.data.message;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
