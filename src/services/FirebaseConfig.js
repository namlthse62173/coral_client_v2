import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, FacebookAuthProvider, onAuthStateChanged } from 'firebase/auth'
import { doc, getFirestore, setDoc, onSnapshot, collection, query, where, getDoc, updateDoc, orderBy } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const storageBucket = "crm-storage-v1.appspot.com";
const firebaseConfig = {
  apiKey: "AIzaSyA2h0J3xkMGM13SU6eomUA3wJJHh8yga_o",
  authDomain: "crm-storage-v1.firebaseapp.com",
  projectId: "crm-storage-v1",
  storageBucket: storageBucket,
  messagingSenderId: "335115019834",
  appId: "1:335115019834:web:42d1c6b91a20fb8d48f703",
  measurementId: "G-YL1H72H022"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const storage = getStorage(firebaseApp);
getAnalytics(firebaseApp)

const auth = getAuth()
const db = getFirestore()

export { db, doc, setDoc, auth, signInWithPopup, FacebookAuthProvider, onAuthStateChanged, onSnapshot, collection, query, where, getDoc, updateDoc, orderBy, getStorage, ref, uploadBytes, getDownloadURL }