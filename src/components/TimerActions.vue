<template>
  <div class="has-text-centered">
    <button v-if="$store.state.timerRemaining > 0" class="button" @click="toggleTimer">
      {{ timerActive ? 'Pause' : 'Start' }}
      {{ isTimerWork ? '' : 'Break' }}
    </button>
    <button class="button" @click="resetTimer">Stop</button>
    <p> {{ timerType }} </p>
    <p> Round {{ round }} </p>
  </div>
</template>

<script>
export default {
  name: 'TimerActions',
  computed: {
    timerActive() { return this.$store.state.timerActive; },
    timerType() { return this.$store.state.timerType; },
    round() { return this.$store.state.round; },
    isTimerWork() { return this.$store.state.timerType == 1; }
  },

  methods: {
    toggleTimer() {
      this.$store.dispatch("toggleTimer");
    },

    resetTimer() {
      if (!confirm("Are you sure you want to stop the timer?"));
      this.$store.dispatch("resetTimer");
    }
  }
};
</script>
