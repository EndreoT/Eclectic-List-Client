<template>
  <div class="col-md-auto">
    <div id>
      <img
        v-on:click="selectAvatarImage($event.target, $event.target.attributes.db_id.value)"
        class="avatar-image"
        :src="listItem.path"
        :db_id="listItem._id"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'imageListView',
  props: ['listItem'],
  methods: {
    selectAvatarImage(element, imageUrl) {
      // Visually highlights singular selected avatar image
      const activeSelectedAvatarElem = document.getElementById(
        'active-selection',
      );
      if (activeSelectedAvatarElem) {
        activeSelectedAvatarElem.setAttribute('id', '');
      }
      element.setAttribute('id', 'active-selection');
      this.$store.dispatch('avatarImage/updateSelectedAvatarImage', {
        selectedAvatarImage: imageUrl,
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
#active-selection {
  border: solid 2px red;
}
</style>
