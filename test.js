let curUser;
const users = "users";
const db = firebase.firestore();

//Update users' info onto Firestore database
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    var uid = user.uid;
    curUser = user;

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
            isOragnization: false,
          });
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  } else {
    // User is signed out
    // ...
  }
});
