// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDxXo8B7hwq_BSVTjrlZT0GidFmWNam3XI",
  authDomain: "todo-app-cp-e49d5.firebaseapp.com",
  databaseURL: "https://todo-app-cp-e49d5.firebaseio.com",
  projectId: "todo-app-cp-e49d5",
  storageBucket: "todo-app-cp-e49d5.appspot.com",
  messagingSenderId: "675002709103",
  appId: "1:675002709103:web:a6d7dac578e68269fe899a",
  measurementId: "G-VCNLQR8QH1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db, auth, storage };