import firebase from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyA4Dpow7803oU1VIQKg5P-zqnKJnYQv9qk",
    authDomain: "weienig.firebaseapp.com",
    projectId: "weienig",
    storageBucket: "weienig.appspot.com",
    messagingSenderId: "4536199880",
    appId: "1:4536199880:web:16b32e6036d05bb3e493fd"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;