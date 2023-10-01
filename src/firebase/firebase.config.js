// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbu2BGXVOZdvLQoyfcW3vDO50pMpPkSoQ",
  authDomain: "auth-moha-milon-63649.firebaseapp.com",
  projectId: "auth-moha-milon-63649",
  storageBucket: "auth-moha-milon-63649.appspot.com",
  messagingSenderId: "344285286143",
  appId: "1:344285286143:web:97219bdea6cf40d79ec6ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth