import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC70TTBwffVbpvurV5YziIvV67yAYscHF4",
    authDomain: "doomsday-jamboree.firebaseapp.com",
    databaseURL: "https://doomsday-jamboree.firebaseio.com",
    projectId: "doomsday-jamboree",
    storageBucket: "doomsday-jamboree.appspot.com",
    messagingSenderId: "775461510258"
  };
  firebase.initializeApp(config);

export default firebase;
