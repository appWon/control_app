<template>
  <v-card color="grey lighten-4">
    <v-toolbar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <AvartarMenu />
    </v-toolbar>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { UserInfoState } from '@/store/user/types';
import { State } from 'vuex-class';

import AvartarMenu from "./AvatarMenu.vue";


@Component({
  components : {
    AvartarMenu
  }
})

export default class Header extends Vue {
  @State('userInfo')
  user!: UserInfoState;

    private mounted() {
      console.log("----------------------",this.user);
    }
}
</script>
