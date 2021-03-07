<template>
  <div class="flex">
    <div class="border">
      <v-card class="pb-5 ma-5">
        <v-card-title>
          모델 현황
        </v-card-title>
        <chart :chart-data="getModelTypeData" :chart-options="chartOptions" />
      </v-card>
    </div>
    <div class="border">
      <v-card class="pb-5 ma-5">
        <v-card-title>
          동작 현황
        </v-card-title>
        <chart :chart-data="getActivate" :chart-options="chartOptions" />
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { Getter } from 'vuex-class';
  import Chart from "./singleChart.vue";

  @Component({
      components: { Chart }
  })
  export default class ChartLayout extends Vue {
    @Getter('machineInfo/getActivate') getActivate!: Chart.ChartData;
    @Getter('machineInfo/getModelTypeData') getModelTypeData!: Chart.ChartData;

    private chartOptions: Chart.ChartOptions = {};
  }
</script>

<style lang="scss" scoped>
  .flex{
    display: flex;
    .border{
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
</style>