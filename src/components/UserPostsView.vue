<template>
  <div>
    <router-link :to="`/posts/${listItem._id}`">
      {{ listItem.subject }}
    </router-link>
    <p>Number of comments: {{ listItem.number_of_comments }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserPostsView',
  props: ['listItem'],
};
</script>
