//Conexion a la base de datos
//Installar : npm install i firebase
import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCtalS4Lcn85AYHP0iryck_iw34EaVUIZI",
  authDomain: "warmup-firebase-a6fac.firebaseapp.com",
  projectId: "warmup-firebase-a6fac",
  storageBucket: "warmup-firebase-a6fac.appspot.com",
  messagingSenderId: "13502612119",
  appId: "1:13502612119:web:08db860222259f04b09fd2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
