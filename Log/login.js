const mainPage = "../test.html";
var uiConfig = {
  signInSuccessUrl: mainPage,
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

// firebase
//   .auth()
//   .setPersistence(firebase.auth.Auth.Persistence.SESSION)
//   .then(() => {
//     // Existing and future Auth states are now persisted in the current
//     // session only. Closing the window would clear any existing state even
//     // if a user forgets to sign out.
//     // ...
//     // New sign-in will be persisted with session persistence.
//     return firebase.auth().signInWithEmailAndPassword(email, password);
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start("#firebaseui-auth-container", uiConfig);

async function loginButtonClicked() {
  if (document.getElementById("rememberMe").check) {
    console.log("remember");
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .catch((e) => {
        console.log(e);
      });
  } else {
    console.log(" Not remember");
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch((e) => {
        console.log(e);
      });
  }
  let loginSucess = await emailLogin(
    document.getElementById("loginName").value,
    document.getElementById("loginPassword").value
  );
  if (loginSucess) window.open(mainPage, "_self");
}

async function emailLogin(email, password) {
  let res = true;
  //firebase.auth().signOut();
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((e) => {
      loginFailed();
      res = false;
    });
  return res;
}

function loginFailed() {
  alert("Wrong email and/or password!");
}
let u;
firebase.auth().onAuthStateChanged((user) => {
  u = user;
});
