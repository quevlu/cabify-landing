<template>
  <div
    v-if="isLoading"
    :class="`spinner-border text-${color}`"
    role="status"
  ></div>
</template>

<script>
export default {
  props: {
    isLoading: {
      name: Boolean,
      default: true
    },
    color: {
      name: String,
      default: 'white'
    }
  }
};
</script>

<style lang="scss" scoped>
.spinner-border {
  width: 20px;
  height: 20px;
  display: block;
  margin: auto;

  &.text-secondary {
    color: $body-color !important;
  }
}
</style>
