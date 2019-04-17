<template>
  <div class="box">
    <h2 class="is-size-3 has-text-centered">{{ task.title }}</h2>
    <timer-progress-bar />
  </div>
</template>

<script>
import Task from '@/models/Task'
import TimerProgressBar from '@/components/TimerProgressBar'
export default {
  name: 'ViewTask',
  components: {
    TimerProgressBar
  },

  props: {
    id: [Number, String]
  },

  watch: {
    id: {
      immediate: true,
      handler() {
        this.task = Task.getTask(this.id);
      }
    }
  },

  data() {
    return {
      task: new Task('')
    };
  }
};
</script>
