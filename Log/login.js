const mainPage = "../index.html";
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

async function registerButtonClicked() {
  let name = document.getElementById("registerName").value;
  let tele = document.getElementById("registerTelephone").value;
  let email = document.getElementById("registerEmail").value;
  let password = document.getElementById("registerPassword").value;
  let rePassword = document.getElementById("registerRepeatPassword").value;
  if (password.length < 6) {
    alert("Please use more than 6 characters for password!");
    return;
  }
  if (password != rePassword) {
    alert("Passwords do not match!");
    return;
  }
  let succeed = await createUser(email, password, name, tele);
  if (succeed) window.open(mainPage, "_self");
}

async function createUser(email, password, name, tele) {
  let res = true;
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((e) => {
      alert(e.message);
      res = false;
    });
  let user = firebase.auth().currentUser;
  await user
    .updateProfile({
      displayName: name,
      phoneNumber: tele,
    })
    .catch((e) => {
      alert(e.message);
    });
  return res;
}
