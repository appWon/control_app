<template>
  <div>
    <Header />
    <div class="flex">
      <MachineState />
      <ChartLayout />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/header/Header.vue";
import DataTable from "@/components/dataTable/dataTable.vue";
import ChartLayout from '@/components/chart/chartLayout.vue';
import MachineState from '@/components/dataTable/machineState.vue';

@Component({
  components: {
    Header,
    DataTable,
    ChartLayout,
    MachineState
  }
})
export default class Home extends Vue {} 
</script>
<style lang="scss" scoped>
  .flex{
    display : flex;
  }
</style>
