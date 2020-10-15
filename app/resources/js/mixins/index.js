import Vue from "vue";
import extractError from "./extract-error-mixin";

Vue.mixin({
  methods: {
    extractError: extractError
  }
});
