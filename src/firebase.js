import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
  apiKey: "AIzaSyAbMeCZQPuTYpk_Nrj2KhupHzSBVmoqc40",
  authDomain: "chatik-c21fe.firebaseapp.com",
  databaseURL: "https://chatik-c21fe.firebaseio.com",
  projectId: "chatik-c21fe",
  storageBucket: "chatik-c21fe.appspot.com",
  messagingSenderId: "621515995243",
  appId: "1:621515995243:web:2897e839ce12ed83"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export { db, firebase };
