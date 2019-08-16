<template>
  <div class="form-group">
    <h2>{{ field.label }}</h2>
    <select
      class="form-group"
      :value="formData[field.name]"
      required
      @input="$emit('input',
                    $event.target.value)"
    >
      <option
        v-for="option in formData.categories"
        :key="option._id"
      >
        {{ option.category }}
      </option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'SelectList',
  props: ['field', 'formData'],
};
</script>
