<template>
  <div class="m-2 text-center">
    <h2>Thanks</h2>
    <p>thanks for placing you order,which is #{{ orderId }}.</p>
    <router-link to="/" class="btn btn-primary">Return to Store</router-link>
  </div>
</template>
<script>
export default {
  computed: {
    orderId() {
      return this.$route.params.id;
    }
  }
};
</script>
