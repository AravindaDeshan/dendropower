// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref, push, set, onValue, query, orderByChild, equalTo } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCipvfgkNkPFOAlB1j1pd3KuTo6aApYbGQ",
  authDomain: "vidulbiomass-store.firebaseapp.com",
  projectId: "vidulbiomass-store",
  storageBucket: "vidulbiomass-store.appspot.com",
  messagingSenderId: "884383897011",
  appId: "1:884383897011:web:d0a28ece7b04e8485927c6",
  measurementId: "G-XEVCLPJ42H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, ref, push, set, onValue, query, orderByChild, equalTo, auth, signInWithEmailAndPassword, signOut };