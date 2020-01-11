<template>
  <div v-if="show" class="text-danger">
    <div v-for="m in messages" v-bind:key="m">
      {{ m }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["validation"],
  computed: {
    show() {
      return this.validation.$dirty && this.validation.$invalid;
    },
    messages() {
      let mesasges = [];
      if (this.validation.$dirty) {
        if (this.hasValidationError("required")) {
          mesasges.push("please enter a value");
        } else if (this.hasValidationError("email")) {
          mesasges.push("please enter a valid email address");
        }
      }
      return mesasges;
    }
  },
  methods: {
    hasValidationError(type) {
      return (
        this.validation.$params.hasOwnProperty(type) && !this.validation[type]
      );
    }
  }
};
</script>
