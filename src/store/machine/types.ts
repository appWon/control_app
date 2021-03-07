export interface MachineInfo {
  key: string;
  manager: string;
  model: string;
  modelNumber: string;
  receivingData: string;
  state: string;
}

export interface MachineInfoState {
  machineInfo?: MachineInfo[];
  error: boolean;
}