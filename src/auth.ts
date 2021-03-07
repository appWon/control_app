import firebase from './firbase';
import store from './store';
import router from './router';

firebase.auth().onAuthStateChanged((user) =>{
  if (user) {
    store.commit('userInfo/setUserInfo',{
      userName: user.displayName,
      userEmail: user.email,
      imgURL: user.photoURL,
    })
    router.push('/')
  } else {
    router.push('/login')
  }
});