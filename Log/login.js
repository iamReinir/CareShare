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
  // Privacy policy url/callback.
  privacyPolicyUrl: function () {
    window.location.assign("<your-privacy-policy-url>");
  },
};

const firebaseConfig = {
  apiKey: "AIzaSyBSezDH_1igvrvfB_2eh5O_DLX_knpNTbU",
  authDomain: "careshare-9087d.firebaseapp.com",
  projectId: "careshare-9087d",
  storageBucket: "careshare-9087d.appspot.com",
  messagingSenderId: "1085205167275",
  appId: "1:1085205167275:web:ed0b71cd64201fcf6acbee",
  measurementId: "G-5EWSB778R8",
};
let app = firebase.initializeApp(firebaseConfig);
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start("#firebaseui-auth-container", uiConfig);
