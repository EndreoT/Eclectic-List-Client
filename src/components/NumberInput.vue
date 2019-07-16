<template>
  <div class="form-group">
    <label>{{field.label}}</label>
    <input
      class="form-control"
      type="number"
      step="0.01"
      :name="field.name"
      :value="formData[field.name]"
      @input="$emit('input',
           $event.target.value)"
      :placeholder="field.placeholder"
    >
  </div>
</template>

<script>
export default {
  name: 'NumberInput',
  props: ['field', 'formData'],
};
</script>
