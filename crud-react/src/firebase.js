import * as firebase1 from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCmKeNPWWa8yjLrxaM2QST6KgNIHphghN0",
  authDomain: "calcium-adapter-250415.firebaseapp.com",
  databaseURL: "https://calcium-adapter-250415.firebaseio.com",
  projectId: "calcium-adapter-250415",
  storageBucket: "calcium-adapter-250415.appspot.com",
  messagingSenderId: "574409860010",
  appId: "1:574409860010:web:7f4fbde7408d0d6ca141d3",
  measurementId: "G-FK8HMSG7JT"
};
// Initialize Firebase



 var firedb = firebase1.initializeApp(firebaseConfig);

 export default firedb.database().ref();