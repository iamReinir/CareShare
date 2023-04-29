function showReg() {
  let logForm = document.getElementById("pills-login");
  logForm.classList.remove("active");
  logForm.classList.remove("show");
  let regForm = document.getElementById("pills-register");
  regForm.classList.add("active");
  regForm.classList.add("show");
}

function showLog() {
  let regForm = document.getElementById("pills-register");
  regForm.classList.remove("active");
  regForm.classList.remove("show");
  let logForm = document.getElementById("pills-login");
  logForm.classList.add("active");
  logForm.classList.add("show");
}
var uiConfig = {
  signInSuccessUrl: "../index.html",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //firebase.auth.GithubAuthProvider.PROVIDER_ID,
    //firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: "<your-tos-url>",
  signInFlow: "popup",
  // Privacy policy url/callback.
  privacyPolicyUrl: function () {
    window.location.assign("<your-privacy-policy-url>");
  },
};

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
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start("#firebaseui-auth-container", uiConfig);
