<template>
  <nav class="panel">
    <div class="panel-block">
      <input
        class="input"
        placeholder="Add a new task"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @keydown.enter="$emit('on:save')"
      />
    </div>
    <div v-if="Object.keys(tasks).length == 0" class="has-text-centered panel-block">
      <p>No tasks yet.</p>
    </div>
    <template v-else>
      <a class="panel-block" v-for="(task, id) in tasks" :key="id">
        {{ task.title }}
      </a>
    </template>
  </nav>
</template>

<script>
export default {
  name: "TaskList",
  props: {
    tasks: {
      type: Object,
      default: () => ({})
    },
    value: String
  }
};
</script>
