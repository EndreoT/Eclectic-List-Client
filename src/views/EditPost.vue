<template>
  <div
    id="page-content"
    class="container"
  >
    <PageTitle :page-title="pageTitle" />

    <div
      id="content"
      class="container"
    >
      <div v-if="!error">
        <!-- Edit post form -->
        <form @submit.prevent="editPost">
          <component
            :is="field.fieldType"
            v-for="(field, index) in schema"
            :key="index"
            v-model="formData[field.name]"
            :field="field"
            :form-data="formData"
            :required="true"
          />

          <button
            type="submit"
            class="btn btn-primary btn-override"
          >
            Edit Post
          </button>
        </form>
      </div>
      <ResourceRetrievalError
        v-if="error"
        :error="error"
      />
    </div>
  </div>
</template>

<script>
import ResourceRetrievalError from '../components/ResourceRetrievalError';
import NumberInput from '../components/NumberInput';
import SelectList from '../components/SelectList';
import TextInput from '../components/TextInput';
import schema from '../schema/schema';
import PageTitle from '../components/PageTitle';

import getPost, { editPost, getCategories } from '../API/API';

export default {
  name: 'EditPost',
  components: {
    ResourceRetrievalError,
    NumberInput,
    SelectList,
    TextInput,
    PageTitle,
  },
  data: () => ({
    pageTitle: 'Edit Post',
    formData: {
      categories: [],
      userId: '',
      subject: '',
      description: '',
      category: '',
      price: 0,
    },
    schema,
    error: '',
  }),
  computed: {
    postId() {
      return this.$route.params.post;
    },
  },
  created() {
    this.formData.userId = this.$store.getters['auth/userId'];
  },
  async mounted() {
    await Promise.all([this.getCategories(), this.getPost()]);
  },
  methods: {
    async getPost() {
      try {
        const response = await getPost(this.postId);
        if (response.status === 200) {
          const post = response.data;
          this.formData.category = post.category.category;
          this.formData.subject = post.subject;
          this.formData.description = post.description;
          this.formData.price = post.price;
        } else {
          this.error = response;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getCategories() {
      try {
        const response = await getCategories();
        if (response.status === 200) {
          this.formData.categories = response.data;
        } else {
          this.initData.error = response.data.message;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async editPost() {
      try {
        const body = {
          subject: this.formData.subject,
          description: this.formData.description,
          category: this.formData.category,
          price: this.formData.price,
        };
        const response = await editPost(body, this.postId);

        // Redirect to edited post
        this.$router.push(`/posts/${response._id}`);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.btn-override {
  margin-bottom: 15px;
}
</style>
