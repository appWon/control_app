<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <v-card class="pa-10">
          <img @click="signIn" src="https://coderwall-assets-0.s3.amazonaws.com/uploads/picture/file/4314/download.png" alt="로그인 이미지"/>
        </v-card>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from 'vuex-class';

@Component
export default class Home extends Vue {

  @Action('userInfo/signIn') signIn:any;

}
</script>
<style lang="scss">
  img {
    width: 300px;
    cursor: pointer;
  }
</style>