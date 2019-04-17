<template>
  <section class="section">
    <button class="button" @click="toggleTimer">
      {{ active ? 'Pause' : 'Start' }}
    </button>
    <button class="button" @click="resetTimer">Reset</button>
  </section>
</template>

<script>
export default {
  name: 'TimerActions',
  methods: {
    toggleTimer() {
      this.$store.dispatch("toggleTimer");
    },

    resetTimer() {
      if (!confirm("Are you sure you want to reset the timer?"));
      this.$store.commit("setTimerRemaining", 5000);
      this.$store.commit("stopTimer");
    }
  }
};
</script>
