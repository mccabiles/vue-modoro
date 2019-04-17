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
    <div v-if="Object.keys(tasks).length == 0" class="has-text-grey panel-block">
      <p style="margin-left: auto; margin-right: auto;">No tasks yet.</p>
    </div>
    <template v-else>
      <router-link
        tag="a"
        class="panel-block" 
        active-class="is-active" 
        v-for="(task, id) in tasksData"
        :key="id"
        :to="{ name: 'view', params: { id }}"
      >
        <span>{{ task.title }}</span>
        <span v-if="!$store.state.timerActive" class="panel-button">
          <button class="button" @click.stop="$emit('on:delete', task)">Delete</button>
        </span>
      </router-link>
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
  },
  
  data() {
    return {
      tasksData: {}
    };
  },

  watch: {
    tasks: {
      deep: true,
      immediate: true,
      handler(tasks) {
        this.tasksData = Object.assign({}, tasks); 
      }
    }
  }
};
</script>

<style scoped>
  .panel-button {
    margin-left: auto;
  }
</style>