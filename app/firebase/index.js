import firebase from 'firebase';

// Initialize Firebase in Try/Catch to limit initialization to once
try {
  var config = {
    apiKey: "AIzaSyDN4VseQ-l1j_WphEDKB2xLnnYrr2HB9Zg",
    authDomain: "my-todo-app-f0c3c.firebaseapp.com",
    databaseURL: "https://my-todo-app-f0c3c.firebaseio.com",
    projectId: "my-todo-app-f0c3c",
    storageBucket: "my-todo-app-f0c3c.appspot.com",
    messagingSenderId: "103493223913"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;