<template>
  <v-menu
    bottom
    min-width="200px"
    rounded
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        x-large
        v-on="on"
      >
        <v-avatar size="40">
          <img src="https://avatars.githubusercontent.com/u/46001535?s=460&u=08a08f87c7b68c83cdc298cc6263b82cffd9c360&v=4">
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-list-item-content class="justify-center">
        <div class="mx-auto text-center">
          <v-avatar>
            <img src="https://avatars.githubusercontent.com/u/46001535?s=460&u=08a08f87c7b68c83cdc298cc6263b82cffd9c360&v=4">
          </v-avatar>
          <h3 class="my-2">{{ user.name }}</h3>
          <p class="caption mt-1">
            {{ user.email }}
          </p>
          <v-divider class="my-3"></v-divider>
          <v-btn
            depressed
            rounded
            text
          >
            로그아웃
          </v-btn>
        </div>
      </v-list-item-content>
    </v-card>
  </v-menu>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class AvatarMenu extends Vue {
  private user = {
    name : "장재원",
    email : "korkrip11@gmail.com"
  };
}
</script>
