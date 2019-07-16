<template>
  <div>
    <div v-show="list">
      <p id="total-items">Total {{listName}}: {{totalItems}}</p>
      <ul class="list-group">
        <li class="list-group-item" href="#" v-for="item in list" :key="item._id">
          <component :is="view" :listItem="item"></component>
        </li>
      </ul>
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
