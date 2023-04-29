const firebaseConfig = {
  apiKey: "AIzaSyCLSW2XN2Dtneqn7ItU8LIIdlBbyXl1A8g",
  authDomain: "careshare-d3c74.firebaseapp.com",
  projectId: "careshare-d3c74",
  storageBucket: "careshare-d3c74.appspot.com",
  messagingSenderId: "339006510175",
  appId: "1:339006510175:web:a8fad88cd2539cb91bb7ea",
  measurementId: "G-DXHCXFX7LE",
};
let app = firebase.initializeApp(firebaseConfig);
let curUser;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log("THERE IS USER");
    console.log(user.email);
    curUser = user;
    // ...
  } else {
    console.log("THERE IS NONE...");
    // User is signed out
    // ...
  }
});
