import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0i_lGjgLRn3kp3HAsIMgxfx3H9NLfOmY",
  authDomain: "clone-cce5c.firebaseapp.com",
  projectId: "clone-cce5c",
  storageBucket: "clone-cce5c.appspot.com",
  messagingSenderId: "990982578002",
  appId: "1:990982578002:web:fe3ec68ac896a974fb248b",
  measurementId: "G-T9JQ9JGMJW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };
