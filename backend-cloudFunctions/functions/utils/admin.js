const admin = require("firebase-admin");
const serviceAccount = require("../serviceacc/serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hooko-36c30.firebaseio.com",
  storageBucket: "hooko-36c30.appspot.com",
});
const db = admin.firestore();

module.exports = { admin, db };

/* const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db }; */
