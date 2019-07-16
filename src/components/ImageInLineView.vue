<template>
  <div>
    <div v-show="list">
      <p id="total-items">Total {{listName}}: {{totalItems}}</p>

      <div id="image-container" class="container">
        <div class="row">
          <div v-for="item in list" :key="item._id">
            <component :is="view" :listItem="item"></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'unorderedList',
  props: ['list', 'listName', 'totalItems', 'view'],
};
</script>

<style lang="postcss" scoped>
#total-items {
  color: white;
}
</style>
