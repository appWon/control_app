import { GetterTree } from 'vuex';
import { RootState } from '../types';
import { MachineInfoState, MachineInfo } from './types';

export const getters: GetterTree<MachineInfoState, RootState> = {
  getModelTypeData(state : MachineInfoState):object {
    const unique: any = {};

    if(state.machineInfo){
      state.machineInfo.forEach((list: MachineInfo) => { 
        unique[list.model] = (unique[list.model] || 0)+1; 
      });
    }

    return {
      labels: Object.keys(unique),
      datasets: [
          {
            type: "doughnut",
            data: Object.values(unique),
            backgroundColor: Object.keys(unique).map( _ =>
              ("#" + Math.round(Math.random() * 0xffffff).toString(16))
            ),
            fill: true,
          }
      ]
    }
  },

  getActivate(state : MachineInfoState):object{
    const unique: any = {};

    if(state.machineInfo){
      state.machineInfo.forEach((list: MachineInfo) => {
        const itemKey = list.state === 'on' ? "동작" : "비동작";
        unique[itemKey] = (unique[itemKey] || 0)+1; 
      });
    }

    return {
      labels: Object.keys(unique),
      datasets: [
          {
            type: "doughnut",
            data: Object.values(unique),
            backgroundColor: Object.keys(unique).map( _ =>
              ("#" + Math.round(Math.random() * 0xffffff).toString(16))
            ),
            fill: true,
          }
      ]
    }
  }
};