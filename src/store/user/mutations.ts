import { MutationTree } from 'vuex';
import { UserInfoState, UserInfo } from './types';

export const mutations: MutationTree<UserInfoState> = {
    customerLoaded(state, payload: UserInfo) {
        state.error = false;
        state.userInfo = payload;
    },
    customerError(state) {
        state.error = true;
        state.userInfo = undefined;
    },
    setUserInfo(state, data: UserInfo){
        state.userInfo = data;
    }
};