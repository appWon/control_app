import { GetterTree } from 'vuex';
import { RootState } from '../types';
import { UserInfoState } from './types';

export const getters: GetterTree<UserInfoState, RootState> = {
    getUserName(state): object {
        return state;
    }
};  