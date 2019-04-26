<template>
  <div class="container" id="page-content">

    <PageTitle :pageTitle="pageTitle"></PageTitle>

    <div class="container" id="content">
      <div v-if="!error">

        <!-- Edit post form -->
        <form @submit.prevent="editPost">
          <component
            v-for="(field, index) in schema"
            :key="index"
            :is="field.fieldType"
            v-model="formData[field.name]"
            :field="field"
            :formData="formData"
            :required="true"
          ></component>

          <button type="submit" class="btn btn-primary btn-override">Edit Post</button>
        </form>
      </div>
      <ResourceRetrievalError v-if="error" :error="error"></ResourceRetrievalError>
    </div>
  </div>
</template>

<script>
import ResourceRetrievalError from "../components/ResourceRetrievalError";
import NumberInput from "../components/NumberInput";
import SelectList from "../components/SelectList";
import TextInput from "../components/TextInput";
import schema from "../schema/schema";
import PageTitle from "../components/PageTitle";

import getPost, { postModification, getCategories } from "../API/API";

const EDIT_MESSAGE_API_URL = 'https://eclectic-list-server.herokuapp.com/api/posts/edit/'
// const EDIT_MESSAGE_API_URL = "http://localhost:4000/api/posts/edit/";

export default {
  name: "editPost",
  components: {
    ResourceRetrievalError,
    NumberInput,
    SelectList,
    TextInput,
    PageTitle
  },
  data: () => ({
    pageTitle: "Edit Post",
    formData: {
      categories: [],
      userId: "",
      subject: "",
      description: "",
      category: "",
      price: 0
    },
    schema: schema,
    error: ""
  }),
  created() {
    this.formData.userId = this.$store.getters["auth/userId"];
  },
  computed: {
    postId() {
      return this.$route.params.post;
    }
  },
  async mounted() {
    await Promise.all([this.getCategories(), this.getPost()]);
  },
  methods: {
    async getPost() {
      try {
        const response = await getPost(this.postId);
        if (response.status === 200) {
          const post = response.resource;
          this.formData.category = post.category.category;
          this.formData.subject = post.subject;
          this.formData.description = post.description;
          this.formData.price = post.price;
        } else {
          this.error = response.message;
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
          userId: this.formData.userId,
          subject: this.formData.subject,
          description: this.formData.description,
          category: this.formData.category,
          price: this.formData.price
        };
        const json = await postModification(
          body,
          EDIT_MESSAGE_API_URL + this.postId,
          "PUT"
        );
        this.$router.push(`/posts/${json._id}`);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
.btn-override {
  margin-bottom: 15px;
}
</style>