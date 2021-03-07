import { ActionTree } from 'vuex';
import { RootState } from '../types';
import { UserInfoState, UserInfo } from './types';

import firebase from 'firebase';

export const actions: ActionTree<UserInfoState, RootState> = {
  fetchCustomer({ commit }): any {
      // const payload: UserInfo = {
      //     userName: 'ㅋㅋㅋㅋ',
      //     imgURL: 'www.zzzzzzz',
      // };
      // commit('customerLoaded', payload);
  },
  async signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();

    try{
      await firebase.auth().signInWithPopup(provider);
    }catch(err) {
        console.log(err);
    }
  },
  async signOut() {
    try{
        await firebase.auth().signOut();
    }catch(err) {
        console.log(err);
    }
  }
};