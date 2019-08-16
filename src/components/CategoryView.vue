<template>
  <div>
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
  </div>
</template>

<script>
import capitalizeFirstLetter from '../API/utils';

export default {
  name: 'CategoryView',
  props: ['listItem'],
  methods: {
    capitalizeFirstLetter(string) {
      return capitalizeFirstLetter(string);
    },
  },
};
</script>
