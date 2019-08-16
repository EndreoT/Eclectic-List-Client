<template>
  <div>
    <img
      class="avatar-image"
      :src="user['avatar_image'].path"
    >
  </div>
</template>

<script>
export default {
  name: 'AvatarImage',
  props: ['user'],
};
</script>
