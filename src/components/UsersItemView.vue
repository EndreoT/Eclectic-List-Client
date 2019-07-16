<template>
  <div>
    <!-- Avatar image -->
    <AvatarImage :user="listItem"></AvatarImage>

    <!-- Username -->
    <router-link :to="`/user/${listItem.username}`">{{listItem.username}}</router-link>
    <br>
    <label>
      Number of posts:
      {{listItem.number_of_posts}}
    </label>
  </div>
</template>

<script>
import AvatarImage from './AvatarImage';

export default {
  name: 'usersItemView',
  props: ['listItem'],
  components: { AvatarImage },
};
</script>
