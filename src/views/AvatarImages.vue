<template>
  <div
    id="page-content"
    class="container"
  >
    <PageTitle :page-title="pageTitle" />

    <h3>Current avatar image:</h3>

    <!-- Current avatar image -->
    <div
      id="content"
      class="container"
    >
      <img
        v-if="user"
        id="current-avatar-image"
        class="avatar-image"
        :src="chosenAvatarImage"
        alt="avatar-image"
      >

      <!-- Display available avatar images to be selected-->
      <ImageInLineView
        v-model="chosenAvatarImage"
        :view="view"
        :list="images"
        :list-name="listName"
        :total-items="numAvatarImages"
      />

      <form @submit.prevent="setAvatarImage">
        <button
          type="submit"
          class="btn btn-primary btn-override"
        >
          Submit
        </button>
      </form>
    </div>

    <!-- <ResourceRetrievalError v-if="error" :error="error"></ResourceRetrievalError> -->
  </div>
</template>

<script>
import ResourceRetrievalError from '../components/ResourceRetrievalError';
import AvatarImagesListView from '../components/AvatarImagesListView';
import ImageInLineView from '../components/ImageInLineView';
import PageTitle from '../components/PageTitle';

import {
  uploadSingleImage,
  getAllAvatarImages,
  getUser,
  getImageById,
  setAvatarImageForUser,
} from '../API/API';

export default {
  name: 'AvatarImages',
  components: { PageTitle, ImageInLineView, ResourceRetrievalError },
  data: () => ({
    user: '',
    chosenAvatarImage: '',
    pageTitle: 'Choose your Avatar Image',
    images: [],
    numAvatarImages: 0,
    listName: 'Avatar Images',
    view: AvatarImagesListView,
    error: '',
  }),
  computed: {
    username() {
      return this.$store.getters['auth/username'];
    },
    userId() {
      return this.$store.getters['auth/userId'];
    },
    currentAvatarImage() {
      return this.$store.getters['avatarImage/selectedAvatarImage'];
    },
  },
  async mounted() {
    await Promise.all([this.getAllAvatarImages(), this.getUser()]);
  },
  methods: {
    async getUser() {
      try {
        const response = await getUser(this.username);
        this.user = response.data;
        this.chosenAvatarImage = this.user.avatar_image.path;
      } catch (error) {
        console.log(error);
      }
    },
    async setAvatarImage(imageUrl) {
      const reqBody = {};
      const avatarImageId = this.currentAvatarImage;
      const { userId } = this;
      reqBody.imageId = avatarImageId;
      reqBody.userId = userId;
      try {
        const response = await setAvatarImageForUser(reqBody);
        if (response.data) {
          // Avatar image successfully chosen
          this.chosenAvatarImage = response.data.image.path;
          this.$store.dispatch('auth/setUser', {
            user: response.data.user,
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getAllAvatarImages() {
      const response = await getAllAvatarImages();
      this.images = response;
      this.numAvatarImages = response.length;
    },
  },
};
</script>
