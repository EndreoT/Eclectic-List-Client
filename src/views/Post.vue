<template>
  <div
    id="page-content"
    class="container"
  >
    <!-- If post exists then show it -->
    <div v-if="post">
      <h1 id="page-title">
        {{ post.subject }} - ${{ post.price }}
      </h1>

      <!-- Post -->
      <div
        id="content"
        class="container"
      >
        <!-- Description -->
        <div class="row">
          <div class="col-md-12">
            <p>{{ post.description }}</p>
          </div>
        </div>
        <hr class="style1">

        <!-- Post Author -->
        <div class="row">
          <div class="col-md-12">
            <p>
              Posted by:
              <router-link :to="`/user/${post.user.username}`">
                {{ post.user.username }}
              </router-link>
            </p>
          </div>
        </div>
        <hr class="style1">

        <!-- Post Images -->
        <ImageInLineView
          :view="view"
          :list="images"
          :list-name="listName"
          :total-items="totalItems"
        />
        <hr class="style1">

        <!-- Post Meta Information -->
        <div class="row">
          <div class="col-md-4 text-muted">
            <p>Post id: {{ post._id }}</p>
          </div>
          <div class="col-md-4">
            <div class="text-muted">
              <p>
                Category:
                <router-link
                  align="right"
                  :to="`/categories/${post.category.category}`"
                >
                  {{ post.category.category }}
                </router-link>
              </p>
            </div>
          </div>
          <div class="col-md-4 text-muted">
            <p>Posted on {{ post.dateCreatedFormatted }}</p>
          </div>
        </div>
        <hr class="style1">

        <!-- Confirm Delete Post -->
        <div style="text-align: center">
          <button
            v-if="authenticatedToAlterPost"
            type="button"
            class="btn btn-primary"
            @click="editPost"
          >
            Edit Post
          </button>

          <div class="divider" />
          <div>
            <b-button
              v-if="authenticatedToAlterPost"
              v-b-modal.deletePostModal
              class="btn btn-danger"
            >
              Delete Post
            </b-button>

            <b-modal
              id="deletePostModal"
              title="Confirm Delete Post"
              ok-variant="danger"
              ok-title="Delete Post"
              @ok="confirmDeletePost"
            >
              <div
                class="modal-dialog"
                role="document"
              >
                <div class="modal-content">
                  <div class="modal-body">
                    Subject: {{ post.subject }}
                  </div>
                </div>
              </div>
            </b-modal>
          </div>
        </div>

        <br>
        <hr class="style1">

        <!-- Comments section-->
        <p>Number of comments: {{ numberOfComments }}</p>
        <div v-if="authenticatedToPostComment">
          <div
            v-if="formData.emptyComment"
            class="alert alert-dismissible alert-warning"
          >
            <button
              type="button"
              class="close"
              data-dismiss="alert"
            >
              &times;
            </button>
            <p class="mb-0">
              Comment must not be empty
            </p>
          </div>

          <!-- If authenticated, show submit comment form -->
          <form @submit.prevent="submitComment">
            <component
              :is="comment.fieldType"
              v-model="formData[comment.name]"
              :field="comment"
              :form-data="formData"
              :required="false"
            />
            <button
              type="submit"
              class="btn btn-primary"
            >
              Create comment
            </button>
          </form>
        </div>

        <!-- If not authenticated, show login button -->
        <div v-else>
          <button
            type="submit"
            class="btn btn-primary"
            @click="redirectToLogin"
          >
            Login to post a comment
          </button>
        </div>
        <br>
        <div
          v-if="comments.length"
          class="comments"
        >
          <h2>Comments</h2>
          <ul class="list-group">
            <!-- Indivual comment layout -->
            <li
              v-for="comment in comments.slice(0).reverse()"
              :key="comment._id"
              class="list-group-item"
              href="#"
            >
              <div class="comment">
                <!-- user avatar image -->
                <img
                  class="profile-img"
                  :src="comment.user.avatar_image.path"
                  alt="avatar-image"
                >

                <div class="content">
                  <router-link :to="`/user/${comment.user.username}`">
                    {{ comment.user.username }}
                  </router-link>
                  <p class="date">
                    Commented on {{ comment.dateCreatedFormatted }}
                  </p>
                  <div class="text">
                    {{ comment.comment }}
                  </div>
                  <!-- <div class="actions">
                    <a class="reply">Reply</a>
                  </div>-->
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div v-if="noComments">
          <h3>{{ noComments }}</h3>
        </div>
        <div v-if="error">
          <h1>{{ error }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from '../components/TextInput';
import ResourceRetrievalError from '../components/ResourceRetrievalError';
import CategoriesItemView from '../components/CategoriesItemView';
import UnorderedList from '../components/UnorderedList';
import ImageInLineView from '../components/ImageInLineView';
import PostImagesForPost from '../components/PostImagesForPost';

import getPost, {
  deletePost,
  retrieveResource,
  getCommentsForPost,
  getImagesForPost,
  createComment,
} from '../API/API';

const commentSchema = {
  fieldType: 'TextInput',
  placeholder: 'Craft a comment',
  label: 'Post a comment',
  name: 'comment',
  rows: '2',
  cols: '100',
};

export default {
  name: 'Post',
  components: { TextInput, ImageInLineView },
  data: () => ({
    pageTitle: '',
    post: '',
    listName: 'Post Images',
    comments: [],
    images: [],
    view: PostImagesForPost,
    noComments: '',
    comment: commentSchema,
    formData: {
      comment: '',
      emptyComment: false,
    },
    numberOfComments: 0,
    error: '',
  }),
  computed: {
    postId() {
      return this.$route.params.post;
    },
    totalItems() {
      // Total number of posts
      return this.images.length;
    },
    userId() {
      return this.$store.getters['auth/userId'];
    },
    authenticatedToAlterPost() {
      return (
        this.$store.getters['auth/authStatus']
        && this.$store.getters['auth/username'] === this.post.user.username
      );
    },
    authenticatedToPostComment() {
      return this.$store.getters['auth/authStatus'];
    },
  },
  async mounted() {
    Promise.all([this.getPost(), this.getComments(), this.getImagesForPost()]);
  },
  methods: {
    async getPost() {
      try {
        const response = await getPost(this.postId);
        if (response.status === 200) {
          this.post = response.data;
          this.pageTitle = this.post.subject;
        } else {
          this.error = response.comment;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getImagesForPost() {
      try {
        const response = await getImagesForPost(this.postId);
        response.forEach((item) => {
          this.images.push(item);
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getComments() {
      try {
        const response = await getCommentsForPost(this.postId);
        if (response.data.length) {
          this.comments = response.data;
          this.numberOfComments = this.post.number_of_comments;
        } else {
          this.noComments = 'No comments available.';
        }
      } catch (error) {
        console.log(error);
      }
    },
    editPost() {
      this.$router.push(
        `/posts/${this.post._id}/${this.post.user.username}/edit`,
      );
    },
    redirectToLogin() {
      this.$router.push('/login');
    },
    async confirmDeletePost() {
      try {
        await deletePost(this.postId);
        this.$router.push('/posts/');
      } catch (error) {
        console.log(error);
      }
    },
    async submitComment() {
      if (!this.formData.comment) {
        this.formData.emptyComment = true;
      } else {
        const body = {
          postId: this.postId,
          comment: this.formData.comment,
        };
        try {
          const postResponse = await createComment(body);
          this.noComments = '';
          (this.formData.comment = ''), this.comments.push(postResponse); // How does this syntax work?
          this.numberOfComments++;
          this.formData.emptyComment = false;
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>

<style>
#page-title {
  color: white;
}

.divider {
  width: 5px;
  height: auto;
  display: inline-block;
}

.profile-img {
  height: 100px;
  width: auto;
}

.date {
  padding: 5px;
  font-size: small;
}
</style>
