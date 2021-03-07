import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { UserInfoState } from './types';
import { RootState } from '../types';

export const state: UserInfoState = {
    userInfo: undefined,
    error: false
};

const namespaced = true;

export const userInfo: Module<UserInfoState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};