import {initializeApp, getApp, getApps} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAB6kxh3ijRRbbD_7q-Z0dhjwU5M3hU7wU",
    authDomain: "twitter-kuly.firebaseapp.com",
    projectId: "twitter-kuly",
    storageBucket: "twitter-kuly.appspot.com",
    messagingSenderId: "993387103367",
    appId: "1:993387103367:web:e89874083010567cf6a422",
    measurementId: "G-DMRZJWG7RJ"
  };

  //Initialize app
  const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()
  const db = getFirestore();
  const storage  = getStorage();

  export default app;
  export {db, storage}