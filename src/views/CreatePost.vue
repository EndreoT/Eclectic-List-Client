<template>
  <div
    id="page-content"
    class="container"
  >
    <h1 id="page-title">
      Create Post
    </h1>
    <div
      id="content"
      class="container"
    >
      <!-- Create post form -->
      <form @submit.prevent="submitPost">
        <!-- Post infomation inputs (category, subject, description, price) -->
        <component
          :is="field.fieldType"
          v-for="(field, index) in schema"
          :key="index"
          v-model="formData[field.name]"
          :field="field"
          :form-data="formData"
          :required="true"
        />

        <!-- Images for post -->
        <div class="row">
          <div class="col-md-6">
            <!-- Attach images for Post -->
            <form
              action="postImage"
              method="post"
              enctype="multipart/form-data"
              @change="onFileChange"
            >
              <input
                type="file"
                name="file"
                multiple
              >
            </form>
          </div>
          <div class="col-md-6">
            <div id="form-control-buttons">
              <button
                class="btn btn-warning btn-override"
                type="button"
                @click="removeImages"
              >
                Remove images
              </button>
            </div>
          </div>
        </div>

        <!-- Show currently attached images for post -->
        <div class="row">
          <ImageInLineView
            :view="view"
            :list="formData.images"
            :list-name="listName"
            :total-items="numPostImages"
          />
        </div>

        <div class="row justify-content-center">
          <button
            type="submit"
            class="btn btn-primary btn-override"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import NumberInput from '../components/NumberInput';
import SelectList from '../components/SelectList';
import TextInput from '../components/TextInput';
import PostImagesForCreatePost from '../components/PostImagesForCreatePost';
import ImageInLineView from '../components/ImageInLineView';
import schema from '../schema/schema';

import getPost, {
  createPost,
  getCategories,
  uploadImagesForPost,
} from '../API/API';

export default {
  name: 'CreatePost',
  components: {
    NumberInput,
    SelectList,
    TextInput,
    ImageInLineView,
    PostImagesForCreatePost,
  },
  data: () => ({
    initData: {
      error: '',
      postUrl: '',
    },
    formData: {
      categories: [],
      userId: '',
      subject: '',
      description: '',
      category: '',
      price: 0,
      images: [],
    },
    schema,
    listName: 'Post Images',
    view: PostImagesForCreatePost,
  }),
  computed: {
    numPostImages() {
      return this.formData.images.length;
    },
  },
  created() {
    this.formData.userId = this.$store.getters['auth/userId'];
    this.initData.postUrl = this.$route.params.post;
  },
  async mounted() {
    await this.getCategories();
  },
  methods: {
    async getCategories() {
      try {
        const reponse = await getCategories();
        if (reponse.status === 200) {
          this.formData.categories = reponse.data;
          this.formData.category = reponse.data[0].category;
        } else {
          this.initData.error = reponse.data.message;
        }
      } catch (error) {
        console.log(error);
      }
    },
    // Add image file to array
    onFileChange(event) {
      this.formData.images.push(event.target.files[0]);
    },
    // Remove images staged for upload
    removeImages() {
      this.formData.images = [];
    },
    // Submit post to DB
    async submitPost() {
      try {
        const body = {
          subject: this.formData.subject,
          description: this.formData.description,
          category: this.formData.category,
          price: this.formData.price,
        };
        const newPost = await createPost(body);

        // Upload images separately from post
        console.log(this.formData.images.length);

        if (this.formData.images.length) {
          uploadImagesForPost(this.formData.images, newPost._id);
        }

        // Redirect to created post
        this.$router.push(`/posts/${newPost._id}`);
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
