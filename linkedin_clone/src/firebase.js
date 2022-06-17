import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDsXvHfpi0dxofeZ69YLC3toQm0iRHjYmg",
    authDomain: "linkedin-clone-6e7f5.firebaseapp.com",
    projectId: "linkedin-clone-6e7f5",
    storageBucket: "linkedin-clone-6e7f5.appspot.com",
    messagingSenderId: "302858369592",
    appId: "1:302858369592:web:91c401d083701ee02944cd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();



  export {db, auth,};
