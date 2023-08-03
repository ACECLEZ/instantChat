import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

/*
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};
*/

const firebaseConfig = {
  apiKey: "AIzaSyCMDIcXRy_95DrzD9kSo_GxJl96de4aGO4",
  authDomain: "chatpwc-711a0.firebaseapp.com",
  databaseURL: "https://chatpwc-711a0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatpwc-711a0",
  storageBucket: "chatpwc-711a0.appspot.com",
  messagingSenderId: "267904903784",
  appId: "1:267904903784:web:512e8f032891ddd09869dd",
  measurementId: "G-V98KGS7GSQ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);