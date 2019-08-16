<template>
  <div>
    <!-- Info for single post -->
    <label>
      Subject:
      <router-link :to="`/posts/${listItem._id}`">{{ listItem.subject }}</router-link>
    </label>
    <br>
    <label>
      Posted by:
      <router-link :to="`/user/${listItem.user.username}`">{{ listItem.user.username }}</router-link>
    </label>
    <br>
    <p>Number of comments: {{ listItem.number_of_comments }}</p>
    <p>{{ listItem.dateCreatedFormatted }}</p>
    <label>
      Category:
      <router-link
        :to="`/categories/${listItem.category.category}`"
      >{{ capitalizeFirstLetter(listItem.category.category) }}</router-link>
    </label>
  </div>
</template>

<script>
import capitalizeFirstLetter from '../API/utils';

export default {
  name: 'CategoryItemView',
  props: ['listItem'],
  methods: {
    capitalizeFirstLetter(string) {
      return capitalizeFirstLetter(string);
    },
  },
};
</script>
