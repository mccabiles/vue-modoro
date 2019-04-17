<template>
  <div class="box">
    <h2 class="is-size-3 has-text-centered">{{ task.title }}</h2>
    <timer-progress-bar />
    <timer-actions style="margin-top: 1.5rem;" />
  </div>
</template>

<script>
import Task from '@/models/Task';
import TimerProgressBar from '@/components/TimerProgressBar';
import TimerActions from '@/components/TimerActions';
export default {
  name: 'ViewTask',
  components: {
    TimerActions,
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

  beforeRouteUpdate(to, from, next) {
    this.confirmNavigation(next);
  },

  beforeRouteLeave(to, from, next) {
    this.confirmNavigation(next);
  },

  data() {
    return {
      task: new Task('')
    };
  },

  methods: {
    async confirmNavigation(next){
      if (!confirm('Are you sure you want to leave the task? Your progress will be lost!')) return;
      next();
    }
  }
};
</script>
