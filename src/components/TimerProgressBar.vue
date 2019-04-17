<template>
  <div>
    <progress class="progress" :max="timeMax" :value="timeCurr"></progress>
    <p class="has-text-centered"> {{ timeCurr | timestamp }} </p>
  </div>
</template>

<script>
export default {
  computed: {
    timeMax () {
      return this.$store.state.timerMax;
    },

    timeCurr () {
      return this.$store.state.timerRemaining;
    }
  },

  filters: {
    timestamp (val) {
      const minutes = Math.floor(val / 60000).toString().padStart(2, "0");
      const seconds = (val / 1000 % 60).toString().padStart(2, "0");
      return `${minutes}:${seconds}`;
    }
  }
};
</script>
