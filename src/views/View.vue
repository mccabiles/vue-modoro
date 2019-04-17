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

  computed: {
    task() { return this.$store.state.activeTask; }
  },

  watch: {
    id: {
      immediate: true,
      handler() {
        const task = Task.getTask(this.id);
        this.$store.commit('setActiveTask', task);
      }
    }
  },

  beforeRouteUpdate(to, from, next) {
    this.confirmNavigation(next);
  },

  beforeRouteLeave(to, from, next) {
    this.confirmNavigation(next);
  },

  methods: {
    async confirmNavigation(next){
      if (!confirm('Are you sure you want to leave the task? Your progress will be lost!')) return;
      next();
    }
  }
};
</script>
