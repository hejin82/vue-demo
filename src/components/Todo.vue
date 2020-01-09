<template>
  <div>
    <h4 class="bg-primary text-white text-center p-2">
      {{ name }}'s To Do List
    </h4>
    <div class="container-fluid p-4">
      <div class="row">
        <div class="col font-weight-bold">Task</div>
        <div class="col-2 font-weight-bold">Done</div>
      </div>
      <div class="row" v-for="task in tasks" v-bind:key="task.action">
        <div class="col">{{ task.action }}</div>
        <div class="col-2">{{ task.done }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      name: "Adam",
      tasks: [{ action: "buy flowers", done: false }]
    };
  }
};
</script>
