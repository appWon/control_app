<template>
  <div>
    <v-data-table
      show-select
      v-model="selected"
      item-key="modelNumber"
      class="elevation-1 ma-3"
      loading-text="데이터를 불러오는 중입니다."
      :headers="headers"
      :items="machine.machineInfo"
      :loading="machine.machineInfo? false : true"
    >

      <template v-slot:[`item.state`]="{ item }">
        <v-icon class="gear" large v-if="item.state === 'on'">mdi-brightness-7</v-icon>
        <v-icon large v-else>mdi-brightness-5</v-icon>
      </template>

      <template v-slot:[`item.action`]="{ item }">
        <v-icon 
          large 
          class="toggleOn" 
          @click="updateItem(item)"
          v-if="item.state === 'on'" 
        >
            mdi-toggle-switch
        </v-icon>
        <v-icon 
          large
          class="toggleOff" 
          @click="updateItem(item)"
          v-else 
        >
          mdi-toggle-switch-off
        </v-icon>
        <v-icon
          class="ml-4 remove"
          @click="removeItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>

    </v-data-table>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title 
          class="headline d-flex justify-center"
        >
          정말 삭제하시나요?
        </v-card-title>
        <v-card-actions 
          class="d-flex justify-center"
        >
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            취소
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="removeFirebase"
          >
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>  
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Action } from 'vuex-class';
import { MachineInfo,MachineInfoState } from '@/store/machine/types'

@Component
export default class DataTable extends Vue {
  @State('machineInfo') machine: any;
  @Action('machineInfo/readDataList') readDataList:any
  @Action('machineInfo/updateMachineData') updateMachineData:any
  @Action('machineInfo/removeMachineData') removeMachineData:any

  private headers = [          
    { text: '모델', value: 'model', align: 'center' },
    { text: '일련번호', value: 'modelNumber', align: 'center' },
    { text: '담당자', value: 'manager', align: 'center' },
    { text: '수신일', value: 'receivingDate', align: 'center' },
    { text: '상태', value: 'state', align: 'center'},
    { text: '설정', value: 'action', sortable: false, align: 'center'}
  ];

  private dialog = false;
  private selected: Array<MachineInfo> = [];
  private removeData: object = {};

  created(){
    this.readDataList()
  }

  updateItem (item: MachineInfo) {
    this.updateMachineData(item)
  }

  removeItem (item: MachineInfo) {
    this.dialog = true;
    this.removeData = item;
  }

  removeFirebase(){
    this.dialog = false;
    this.removeMachineData(this.removeData)
  }

}
</script>
<style lang="scss" >
  .toggleOn, .toggleOff, .remove{
    cursor: pointer;
  }

  .mdi-brightness-7 {
    animation: rotation 2s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    } 
    to{
      transform: rotate(360deg);
    }
  }
</style>