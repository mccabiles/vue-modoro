import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const timestamp = val => {
  const minutes = Math.floor(val / 60000)
    .toString()
    .padStart(2, "0");
  const seconds = ((val / 1000) % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const DEFAULT_TITLE = "Vue-modoro";

export default new Vuex.Store({
  state: {
    round: 0,
    timerActive: false,
    timerMax: 5000,
    timerRemaining: 5000,
    timer: null
  },

  mutations: {
    setTimerMax(state, timerMax) {
      state.timerMax = timerMax;
    },

    setTimerRemaining(state, timerRemaining) {
      state.timerRemaining = timerRemaining;
    },

    stopTimer(state) {
      clearInterval(state.timer);
      state.timerActive = false;
      state.timer = null;
      document.title = DEFAULT_TITLE;
    },

    deductTime(state, duration) {
      if (state.timerRemaining <= 0) {
        clearInterval(state.timer);
        state.timerActive = false;
        state.timer = null;
        document.title = DEFAULT_TITLE;
        return;
      }

      state.timerRemaining -= duration;
      document.title = timestamp(state.timerRemaining);
    },

    startTimer(state, timer) {
      if (state.timer) clearInterval(state.timer);
      state.timer = timer;
      state.timerActive = true;
    }
  },

  actions: {
    toggleTimer({ state, commit }) {
      if (state.timerRemaining <= 0) return;
      if (state.timerActive) return commit("stopTimer");
      const timer = setInterval(() => commit("deductTime", 1000), 1000);
      commit("startTimer", timer);
    }
  }
});
