<template>
  <div id="app">
    <!-- <Todo /> -->
    <!-- <Store /> -->
    <router-view />
  </div>
</template>

<script>
// import Todo from "./components/Todo.vue";
// import Store from "./components/store/Store.vue";
import { mapActions } from "vuex";

export default {
  name: "app",
  // components: {
  // Todo,
  // Store
  // },
  methods: {
    ...mapActions(["getData"])
  },
  created() {
    this.getData();
  }
};
</script>
