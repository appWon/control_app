import { ActionTree } from 'vuex';
import { RootState } from '../types';
import { MachineInfoState,MachineInfo } from './types';
import moment from 'moment'

import firebase from 'firebase';

export const actions: ActionTree<MachineInfoState, RootState> = {
  readDataList({ commit }): void{
    firebase.database().ref('machine_list').on("value", ( res ) => {
      const data: object = res.val(); //object
      const list: Array<MachineInfo> = Object.keys(data).map( list => ({ key:list, ...(data as any)[list]}))
      commit('SET_MACHINE_LIST',list)
    });
  },

  updateMachineData ({ commit }, data : MachineInfo): void{
    const updateData = {
      manager: data.manager,
      model: data.model,
      modelNumber: data.modelNumber,
      receivingDate: moment().format('HH : mm'),
      state: data.state === 'on' ? 'off' : 'on',
    }

    firebase.database().ref(`machine_list`).update({
      [data.key] : updateData
    });
  },

  removeMachineData({ commit }, data : MachineInfo): void{
    console.log(data.key)
    firebase.database().ref('machine_list').child(data.key).remove();
  },
  
  setData(): void{
    firebase.database().ref('machine_list').push(
      {
        model: `IPHONE-${Math.floor(Math.random() * 10) + 100}`,
        modelNumber:`${Math.floor(Math.random() * 10000) + 1}-${Math.floor(Math.random() * 10) + 1}`,
        manager: "장재원",
        receivingDate: moment().format('HH : mm'),
        state: "on"
      }
    )
  }
};