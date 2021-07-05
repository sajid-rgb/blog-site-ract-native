import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAK4dE_tTDuKaUscqV4qwxclh_OMB7AaSc",
    authDomain: "air-tickets-e9058.firebaseapp.com",
    projectId: "air-tickets-e9058",
    storageBucket: "air-tickets-e9058.appspot.com",
    messagingSenderId: "1040343139275",
    appId: "1:1040343139275:web:8742768ab6a2a60136ac4e"
  };
  
  if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth=firebase.auth();

export default {
  firebase,
  db,
  auth
};