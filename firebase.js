import firebase from 'firebase';
//this is what that connects front-end with backend..
const firebaseConfig = {
    apiKey: "AIzaSyDTXEdZmACHDjC3mZUc4BoNbBZxSNwaYgM",
    authDomain: "clone-bd836.firebaseapp.com",
    projectId: "clone-bd836",
    storageBucket: "clone-bd836.appspot.com",
    messagingSenderId: "970716237221",
    appId: "1:970716237221:web:b4ba218f0a607327e42c4c"
};
const firebaseApp= firebase.initializeApp(firebaseConfig);
const db= firebase.firestore();
const auth= firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();
export {firebaseApp, db, auth, provider};