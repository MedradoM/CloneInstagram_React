import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAX_S5T8NdNakIeb_5q7hmvcccPkB-FWA0",
    authDomain: "instragam-54880.firebaseapp.com",
    projectId: "instragam-54880",
    storageBucket: "instragam-54880.appspot.com",
    messagingSenderId: "627815390219",
    appId: "1:627815390219:web:b72f8c79b118069924fb0e",
    measurementId: "G-06DETZJY80"
  });
  
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const functions = firebase.functions();
  
  export {db, auth, storage, functions};