import { MutationTree } from 'vuex';
import { MachineInfoState, MachineInfo } from './types';


export const mutations: MutationTree<MachineInfoState> = {
  SET_MACHINE_LIST(state, machineList){
    state.machineInfo = machineList
  }
};