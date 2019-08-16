<template>
  <div class="form-group">
    <label>{{ field.label }}</label>
    <input
      class="form-control"
      type="number"
      step="0.01"
      :name="field.name"
      :value="formData[field.name]"
      :placeholder="field.placeholder"
      @input="$emit('input',
                    $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'NumberInput',
  props: ['field', 'formData'],
};
</script>
