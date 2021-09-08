import firebase from "firebase"
// Initialize Firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA4fWsM07As1PRHcpjGDAxgueOE_xUWOos",
    authDomain: "bioquiz-b7b73.firebaseapp.com",
    databaseURL: "https://bioquiz-b7b73.firebaseio.com",
    projectId: "bioquiz-b7b73",
    storageBucket: "bioquiz-b7b73.appspot.com",
    messagingSenderId: "536297073782",
    appId: "1:536297073782:web:e075b4ab5062ffc34e4357"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }