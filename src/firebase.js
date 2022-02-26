import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_QJDr23bnI_3X-tzkGBeTk1iK1kt8P80",
    authDomain: "challenge-e2edf.firebaseapp.com",
    projectId: "challenge-e2edf",
    storageBucket: "challenge-e2edf.appspot.com",
    messagingSenderId: "659478015909",
    appId: "1:659478015909:web:7fd4a5d1263084127e424c",
    measurementId: "G-947EY2H47P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };