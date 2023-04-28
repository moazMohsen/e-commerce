// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZ0GQWDKd31qY7yA_4upVRmA_bK7hm-_o",
    authDomain: "uminex.firebaseapp.com",
    projectId: "uminex",
    storageBucket: "uminex.appspot.com",
    messagingSenderId: "973578538129",
    appId: "1:973578538129:web:69cf3b9c77ada0659fc330"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});




export { auth, googleProvider, facebookProvider, db };
