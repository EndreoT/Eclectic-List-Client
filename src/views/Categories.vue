<template>
  <div
    id="page-content"
    class="container"
  >
    <PageTitle :page-title="pageTitle" />

    <!-- Show all categories -->
    <UnorderedList
      :view="view"
      :list="categories"
      :list-name="listName"
      :total-items="totalCategories"
    />

    <ResourceRetrievalError
      v-if="error"
      :error="error"
    />
  </div>
</template>

<script>
import { getCategories } from '../API/API';
import ResourceRetrievalError from '../components/ResourceRetrievalError';
import CategoriesItemView from '../components/CategoriesItemView';
import UnorderedList from '../components/UnorderedList';
import PageTitle from '../components/PageTitle';

export default {
  name: 'Categories',
  components: { PageTitle, ResourceRetrievalError, UnorderedList },
  data: () => ({
    categories: [],
    pageTitle: 'All Categories',
    listName: 'categories',
    view: CategoriesItemView,
    error: '',
  }),
  computed: {
    totalCategories() {
      return this.categories.length;
    },
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
    },
  },
};
</script>
