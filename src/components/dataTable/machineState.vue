<template>
  <div>
    <v-data-table
      class="elevation-1 ma-3"
      item-key="modelNumber"
      :headers="headers"
      :items="getControlTable"
    >
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter } from 'vuex-class';

@Component
export default class DataTable extends Vue {
  @Getter('machineInfo/getControlTable') getControlTable:any

  private headers = [          
    { text: '모델', value: 'model', align: 'center' },
    { text: '장치수', value: 'count', align: 'center' },
    { text: '동작', value: 'moving', align: 'center' },
    { text: '비동작', value: 'stop', align: 'center' },
  ];
}
</script>
