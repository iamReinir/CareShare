let curUser;
const users = "users";
const db = firebase.firestore();

//Update users' info onto Firestore database
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    let loginAnchor = document.getElementById("logOrSignup");
    loginAnchor.innerHTML = "Log out";
    loginAnchor.onclick = async function () {
      await firebase
        .auth()
        .signOut()
        .error((e) => {
          alert(e.message);
        });
    };
    // User is signed in
    var uid = user.uid;
    curUser = user;
    let profileDisplay = document.getElementById("profile");
    profileDisplay.children[1].children[0].src = curUser.photoURL;
    profileDisplay.children[2].innerHTML = "Profile : " + curUser.displayName;

    var docRef = db.collection(users).doc(user.uid);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          console.log("No such document! Updating...");
          db.collection(users).doc(uid).set({
            name: user.displayName,
            email: user.email,
          });
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  } else {
    console.log("No user signed in");
  }
});
