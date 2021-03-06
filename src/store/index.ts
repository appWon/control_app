import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { userInfo } from './user';
import { machineInfo } from './machine';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0'
  },
  modules: {
    userInfo,
    machineInfo
  }
};

export default new Vuex.Store(store);