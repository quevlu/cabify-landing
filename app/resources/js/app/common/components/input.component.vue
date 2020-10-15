<template>
  <div class="input-wrapper">
    <Label :label="label" />
    <b-form-input
      :novalidate="true"
      :type="type"
      :value="value"
      :minlength="minlength"
      :maxlength="maxlength"
      :placeholder="placeholder"
      v-on:input="updateValue($event)"
      :autocomplete="'off'"
      :formatter="formatter"
      :readonly="readonly"
    />
  </div>
</template>

<script>
const Label = () => import("./label.component.vue");

export default {
  name: "Name",
  components: {
    Label
  },
  props: {
    value: {
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    description: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    minlength: {
      type: Number,
      default: 255
    },
    maxlength: {
      type: Number,
      default: 255
    },
    toLowerCase: {
      name: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
    formatter(value) {
      if (this.toLowerCase) {
        value = value.toLowerCase();
      }
      return value;
    }
  }
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  input {
    height: 34px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    font-weight: bold;

    &::placeholder {
      color: #888 !important;
    }
  }

  .input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}
</style>
