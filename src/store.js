import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
      state.active = false;
      state.timer = null;
    },

    deductTime(state, duration) {
      state.timerRemaining -= duration;
      if (state.timerRemaining <= 0) {
        clearInterval(state.timer);
        state.active = false;
        state.timer = null;
      }
    },

    startTimer(state, timer) {
      if (state.timer) clearInterval(state.timer);
      state.timer = timer;
      state.active = true;
    }
  },

  actions: {
    toggleTimer({ state, commit }) {
      if (state.active) return commit("stopTimer");
      const timer = setInterval(() => commit("deductTime", 1000), 1000);
      commit("startTimer", timer);
    }
  }
});
