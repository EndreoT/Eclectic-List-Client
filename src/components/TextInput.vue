<template>
  <div class="form-group">
    <h2>{{field.label}}</h2>
    <input
      class="form-control"
      type="text"
      :name="field.name"
      :value="formData[field.name]"
      @input="$emit('input', $event.target.value)"
      :placeholder="field.placeholder"
      :rows="field.rows"
      :cols="field.cols"
      :required="required"
    >
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: ["field", "formData", "required"]
};
</script>
