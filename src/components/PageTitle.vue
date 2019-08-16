<template>
  <div>
    <h1 id="page-title">
      {{ capitalizeFirstLetter(pageTitle) }}
    </h1>
  </div>
</template>

<script>
import capitalizeFirstLetter from '../API/utils';

export default {
  name: 'PageTitle',
  props: ['pageTitle'],
  methods: {
    capitalizeFirstLetter(string) {
      return capitalizeFirstLetter(string);
    },
  },
};
</script>
