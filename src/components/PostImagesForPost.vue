<template>
  <div class="col-md-auto">
    <div id>
      <img class="post-image" :src="listItem.path" :db_id="listItem._id">
    </div>
  </div>
</template>

<script>
export default {
  name: 'imageListView',
  props: ['listItem'],
};
</script>
