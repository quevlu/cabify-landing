<template>
  <b-button :to="to" :variant="color" @click="click" class="button p-2" :disabled="isLoading">
    <Spinner class="spinner" :color="skin" :class="isLoading ? 'show' : 'hide'" />
    <div :class="isLoading ? 'hide' : 'show'">
      <span v-if="text">{{ text }}</span>
      <div v-else>
        <slot name="content"></slot>
      </div>
    </div>
  </b-button>
</template>

<script>
const Spinner = () => import("./spinner.component");

export default {
  name: "Filled",
  components: {
    Spinner
  },
  props: {
    text: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "primary"
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    skin: {
      type: String
    },
    to: {
      type: String
    }
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss">
.button {
  transition: $transition-base;
  box-shadow: none !important;
  position: relative;
  border-radius: $border-radius;
  border: none !important;
  font-size: $font-size;
  margin: 0;
  min-width: 150px;
  height: 34px;
  color: #151c44;
  font-weight: bold;
  line-height: 16px;

  &:not(:disabled):hover {
    opacity: 0.9;
    transition: $transition-base;
  }

  &:active {
    outline: none !important;
    box-shadow: none !important;
  }

  .show {
    opacity: 1;
  }

  .hide {
    opacity: 0;
  }

  .spinner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
