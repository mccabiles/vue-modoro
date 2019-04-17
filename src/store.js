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

const TIME_WORK = 1000 * 60 * 25;
const TIME_BREAK_SHORT = 1000 * 60 * 5;
const TIME_BREAK_LONG = 1000 * 60 * 30;
const DEFAULT_TITLE = "Vue-modoro";
const TIMER_TYPE_WORK = 1;
const TIMER_TYPE_BREAK_SHORT = 2;
const TIMER_TYPE_BREAK_LONG = 3;

export default new Vuex.Store({
  state: {
    activeTask: null,
    round: 1,
    timerActive: false,
    timerType: TIMER_TYPE_WORK,
    timerMax: TIME_WORK,
    timerRemaining: TIME_WORK,
    timer: null
  },

  mutations: {
    setActiveTask(state, task) {
      state.activeTask = task;
    },

    setTimerType(state, timerType) {
      state.timerType = timerType;
    },

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

    setRound(state, round) {
      state.round = round;
    },

    deductTime(state, duration) {
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
    startTimer({ commit, dispatch }) {
      const timer = setInterval(() => dispatch("deductTime", 1000), 1000);
      commit("startTimer", timer);
    },

    deductTime({ state, commit, dispatch }) {
      commit("deductTime", 1000);
      if (state.timerRemaining > 0) return;
      commit("stopTimer");
      if (state.timerType != TIMER_TYPE_WORK) return dispatch("startWorkTimer");
      if (state.round % 4 != 0) return dispatch("startBreakTimerShort");
      return dispatch("startBreakTimerLong");
    },

    toggleTimer({ state, commit, dispatch }) {
      if (state.timerRemaining <= 0) return;
      if (state.timerActive) return commit("stopTimer");
      dispatch("startTimer");
    },

    resetTimer({ state, commit }) {
      commit("stopTimer");
      commit("setTimerRemaining", state.timerMax);
    },

    startWorkTimer({ state, commit }) {
      commit("setTimerMax", TIME_WORK);
      commit("setTimerRemaining", TIME_WORK);
      commit("setTimerType", TIMER_TYPE_WORK);
      commit("setRound", state.round + 1);
    },

    startBreakTimerShort({ commit }) {
      commit("setTimerMax", TIME_BREAK_SHORT);
      commit("setTimerRemaining", TIME_BREAK_SHORT);
      commit("setTimerType", TIMER_TYPE_BREAK_SHORT);
    },

    startBreakTimerLong({ commit }) {
      commit("setTimerMax", TIME_BREAK_LONG);
      commit("setTimerRemaining", TIME_BREAK_LONG);
      commit("setTimerType", TIMER_TYPE_BREAK_LONG);
    },
  }
});
