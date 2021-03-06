import { GetterTree } from 'vuex';
import { RootState } from '../types';
import { MachineInfoState } from './types';

import firebase from '@/firbase';

export const getters: GetterTree<MachineInfoState, RootState> = {
  // async abcd(state){
  //   await firebase.database().ref('machine_list').on("value", ( res ) => {
  //     console.log(state)
  //     const data = res.val(); //object
  //     // Object.keys(data).map( list => ( state.machineInfo.machineList.push({ key:list, ...data[list]})))
  //   });
  // },
};