<template>
  <div>
    <progress class="progress" :max="timeMax" :value="timeCurr"></progress>
    <p class="has-text-centered"> {{ timeCurr | timestamp }} </p>
  </div>
</template>

<script>
export default {
  props: {
    timeMax: [Number, String],
    timeCurr: [Number, String]
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
