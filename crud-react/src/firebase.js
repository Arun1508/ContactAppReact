import * as firebase1 from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {

};
// Initialize Firebase



 var firedb = firebase1.initializeApp(firebaseConfig);

 export default firedb.database().ref();
