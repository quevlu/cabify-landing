<template>
  <div class="error-message">
    <span v-if="Boolean(text)">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "error-message",
  props: {
    text: String
  }
};
</script>

<style lang="scss" scoped>
.error-message {
  display: block;
  height: 30px;

  span {
    font-size: 14px;
    font-weight: bold;
    color: #ccc;
  }
}
</style>
