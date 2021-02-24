import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD79v_GggCJYfA7IqCYVoGS70kY4sfx6FU",
  authDomain: "clone-amzn-5ebs.firebaseapp.com",
  projectId: "clone-amzn-5ebs",
  storageBucket: "clone-amzn-5ebs.appspot.com",
  messagingSenderId: "546876578510",
  appId: "1:546876578510:web:5087c1b007aa6813474e9f",
  measurementId: "G-BBPK0DWW5X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };