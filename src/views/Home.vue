<template>
  <div>
    <Header ></Header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/header/Header.vue";

@Component({
  components: {
    Header
  }
})
export default class Home extends Vue {}
</script>
