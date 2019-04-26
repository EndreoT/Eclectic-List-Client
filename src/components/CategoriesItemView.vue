<template>
  <div>
    <router-link :to="`/categories/${listItem['category']}`">
      <h2>{{capitalizeFirstLetter(listItem["category"])}}</h2>
    </router-link>
    <p>Number of Posts: {{listItem["number_of_posts"]}}</p>
  </div>
</template>

<script>
import capitalizeFirstLetter from "../API/utils";

export default {
  name: "categoryItemView",
  props: ["listItem"],
  methods: {
    capitalizeFirstLetter(string) {
      return capitalizeFirstLetter(string);
    }
  }
};
</script>
