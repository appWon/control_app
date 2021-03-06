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
          <img :src="user.userInfo.imgURL">
        </v-avatar>
      </v-btn>
    </template>

    <v-card>
      <v-list-item-content class="justify-center">
        <div class="mx-auto text-center">
          <v-avatar>
            <img :src="user.userInfo.imgURL">
          </v-avatar>
          <h3 class="my-2">{{ user.userInfo.userName }}</h3>
          <p class="caption mt-1">
            {{ user.userInfo.userEmail }}
          </p>
          <v-divider class="my-3"></v-divider>
          <v-btn
            depressed
            rounded
            text
            @click="signOut"
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
import { Action,Getter } from 'vuex-class';
import { UserInfoState } from '@/store/user/types';
@Component
export default class AvatarMenu extends Vue {
  @Getter('userInfo/getUserInfo') user!:UserInfoState;
  @Action('userInfo/signOut') signOut:any;

}
</script>
