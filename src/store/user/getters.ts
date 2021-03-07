import { GetterTree } from 'vuex';
import { RootState } from '../types';
import { UserInfoState } from './types';

export const getters: GetterTree<UserInfoState, RootState> = {
    getUserInfo(state): UserInfoState {
      return state;
    },
};  