import firebase from 'firebase';

var firebaseConfig = {
        
  apiKey: "AIzaSyAXStWOstfA3rqSn41XHB-yAHJXwD6618o",
  authDomain: "class-vote-26997.firebaseapp.com",
  databaseURL: "https://class-vote-26997-default-rtdb.firebaseio.com",
  projectId: "class-vote-26997",
  storageBucket: "class-vote-26997.appspot.com",
  messagingSenderId: "123249308122",
  appId: "1:123249308122:web:a1523340ea145907bed0e3"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();