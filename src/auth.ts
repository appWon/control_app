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

    //@ts-ignore
    if(router.history.current.path === '/login') router.push('/')
  } else {
    //@ts-ignore
    if(router.history.current.path !== '/login') router.push('/login')
  }
});