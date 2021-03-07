<template>
  <div>
    <v-card class="mx-auto overflow-hidden">
      <v-toolbar class="elevation-0">
        <v-app-bar-nav-icon 
          @click="drawer = true">
        </v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <AvartarMenu />
      </v-toolbar>
    </v-card>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="subPage('Home')">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>홈</v-list-item-title>
          </v-list-item>

          <v-list-item @click="subPage('ControlPage')">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>관제 페이지</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import AvartarMenu from "./AvatarMenu.vue";


@Component({
  components : {
    AvartarMenu
  }
})

export default class Header extends Vue {
  private drawer = false;

  subPage(state: string) {
    console.log(state)
    this.$router.push({name: state});
  }
}
</script>
