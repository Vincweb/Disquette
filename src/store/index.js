import Vue from 'vue'
import Vuex from 'vuex'

import disquetteModule from './disquette';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    disquetteModule
  }
});

export default store;