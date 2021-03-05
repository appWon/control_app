<template>
  <div>
    <Header ></Header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/header/Header.vue";
import { namespace, State, Action, Getter } from 'vuex-class';

const serverState = namespace('CountStore');

@Component({
  components: {
    Header
  }
})
export default class Home extends Vue {

  @serverState.Getter('num')
  private num!: number;

  @serverState.Action('incr')
  private incr!: (delta: number) => void;

}
</script>
