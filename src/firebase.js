import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAvskOXJhPFDZgQKG5nRFQsRSpUMXn6duc",
  authDomain: "insta-clone-11f70.firebaseapp.com",
  databaseURL: "https://insta-clone-11f70.firebaseio.com",
  projectId: "insta-clone-11f70",
  storageBucket: "insta-clone-11f70.appspot.com",
  messagingSenderId: "1089962774905",
  appId: "1:1089962774905:web:664de4e308007977cf1fa8",
};

const firesbaseApp = firebase.initializeApp(firebaseConfig);

const database = firesbaseApp.firestore();

export default database;
