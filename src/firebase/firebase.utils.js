import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyD6EC-kHtDyRBuctsfBoHIh4rOZ0TKA8BQ",
    authDomain: "crwn-db-4d4cd.firebaseapp.com",
    projectId: "crwn-db-4d4cd",
    storageBucket: "crwn-db-4d4cd.appspot.com",
    messagingSenderId: "869956867499",
    appId: "1:869956867499:web:ba4bca4fb0dc0ca2aaeeee",
    measurementId: "G-Q57LF1MS4C"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

