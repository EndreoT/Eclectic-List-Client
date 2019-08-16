<template>
  <div>
    <div
      v-if="error"
      class="alert alert-dismissible alert-danger"
    >
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourceRetrievalError',
  props: ['error'],
};
</script>
