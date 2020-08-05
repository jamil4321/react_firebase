import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBq5QH9Up7Us38alr7lszo9JgIr-vwFqHY",
    authDomain: "reactcrud-79cea.firebaseapp.com",
    databaseURL: "https://reactcrud-79cea.firebaseio.com",
    projectId: "reactcrud-79cea",
    storageBucket: "reactcrud-79cea.appspot.com",
    messagingSenderId: "840145301076",
    appId: "1:840145301076:web:6a73f36c4384c592fa47c1"
  };
  // Initialize Firebase
let db = firebase.initializeApp(firebaseConfig);

export default db;