<template>
  <div>
    <Header />
    <DataTable />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/header/Header.vue";
import DataTable from "@/components/dataTable/dataTable.vue";

@Component({
  components: {
    Header,
    DataTable
  }
})
export default class Home extends Vue {} 
</script>
