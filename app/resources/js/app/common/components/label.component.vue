<template>
  <p class="text-title" v-if="label">
    {{ label }}
  </p>
</template>

<script>
export default {
  props: {
    label: {
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.text-title {
  margin: 15px 0 10px;
  font-size: 12px;
  font-weight: bold;
}
</style>
