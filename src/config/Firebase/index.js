import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAFR9rxzlmMay1JUUL0uBXvgA5UawAgi5o",
    authDomain: "web-programming-2357e.firebaseapp.com",
    databaseURL: "https://web-programming-2357e-default-rtdb.firebaseio.com",
    projectId: "web-programming-2357e",
    storageBucket: "web-programming-2357e.appspot.com",
    messagingSenderId: "1003918725783",
    appId: "1:1003918725783:web:11db57e59fc48de9f1cfd2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;