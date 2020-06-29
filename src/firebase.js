import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCO2NtttpoIKpNfAJNCTVlo7CxmGltM7ms",
    authDomain: "asignacion1-lugaresjb.firebaseapp.com",
    databaseURL: "https://asignacion1-lugaresjb.firebaseio.com",
    projectId: "asignacion1-lugaresjb",
    storageBucket: "asignacion1-lugaresjb.appspot.com",
    messagingSenderId: "450575414147",
    appId: "1:450575414147:web:ffbfba70b41e334dc83cb6",
    measurementId: "G-P5YTR45Q5G"
  };
  
  
  firebase.initializeApp(firebaseConfig);

  export default firebase