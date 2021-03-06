import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { MachineInfoState } from './types';
import { RootState } from '../types';

export const state: MachineInfoState = {
    machineInfo: undefined,
    error: false
};

const namespaced = true;

export const machineInfo: Module<MachineInfoState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};