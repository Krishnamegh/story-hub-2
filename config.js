import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyArQiNxgIRUUXzq66pbfswi241sn9v9_5w",
  authDomain: "willy-app-d3e7d.firebaseapp.com",
  projectId: "willy-app-d3e7d",
  storageBucket: "willy-app-d3e7d.appspot.com",
  messagingSenderId: "968525449815",
  appId: "1:968525449815:web:e6a9c8ab9532ebff43b112"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
