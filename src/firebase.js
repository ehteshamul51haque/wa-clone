import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD3gazcPg725x_qV_1nBdHzkO3j21z9dGs",
    authDomain: "wa-clone-7fb7c.firebaseapp.com",
    projectId: "wa-clone-7fb7c",
    storageBucket: "wa-clone-7fb7c.appspot.com",
    messagingSenderId: "968509005964",
    appId: "1:968509005964:web:6514c5e786a04e15559ba9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;