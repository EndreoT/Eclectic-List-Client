<template>
  <div class="form-group">
    <h2>{{field.label}}</h2>
    <textarea
      class="form-group"
      type="text"
      :name="field.name"
      :value="formData[field.name]"
      @input="$emit('input', $event.target.value)"
      :placeholder="field.placeholder"
      :rows="field.rows"
      :cols="field.cols"
      :required="required"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: ["field", "formData", "required"]
};
</script>
