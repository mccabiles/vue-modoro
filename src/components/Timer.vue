<template>
  <div class="has-text-centered">
    <section class="section">
      <div class="container">
        <timer-progress-bar :time-max="timerMax" :time-curr="timerRemaining" />
      </div>
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
  }
};
</script>
