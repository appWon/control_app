<template>
  <div>
    <Header />
    <ChartLayout />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/header/Header.vue";
import DataTable from "@/components/dataTable/dataTable.vue";
import ChartLayout from '@/components/chart/chartLayout.vue';

@Component({
  components: {
    Header,
    DataTable,
    ChartLayout,
  }
})
export default class Home extends Vue {} 
</script>
