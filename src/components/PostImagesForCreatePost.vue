<template>
  <div class="col-md-auto">
    <div id>
      <img
        class="post-image"
        :src="displayImage(listItem)"
        :db_id="listItem._id"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageListView',
  props: ['listItem'],
  methods: {
    displayImage(image) {
      // Get image source URL
      return URL.createObjectURL(image);
    },
  },
};
</script>
