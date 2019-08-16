<template>
  <div>
    <div v-show="list">
      <p id="total-items">
        Total {{ listName }}: {{ totalItems }}
      </p>
      <ul class="list-group">
        <li
          v-for="item in list"
          :key="item._id"
          class="list-group-item"
          href="#"
        >
          <component
            :is="view"
            :list-item="item"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UnorderedList',
  props: ['list', 'listName', 'totalItems', 'view'],
};
</script>

<style lang="postcss" scoped>
#total-items {
  color: white;
}
</style>
