<template>
  <div class="has-text-centered">
    <section class="section">
      <div class="container">
        <timer-progress-bar :time-max="timerMax" :time-curr="timerRemaining" />
      </div>
    </section>
    <section class="section">
      <button class="button" @click="toggleTimer">
        {{ active ? 'Pause' : 'Start' }}
      </button>
      <button class="button" @click="resetTimer">Reset</button>
    </section>
  </div>
</template>

<script>
import TimerProgressBar from './TimerProgressBar';

export default {
  components: {
    TimerProgressBar
  },

  computed: {
    active() {
      return this.$store.state.timerActive;
    },

    timerMax() {
      return this.$store.state.timerMax;
    },

    timerRemaining() {
      return this.$store.state.timerRemaining;
    }
  },

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
