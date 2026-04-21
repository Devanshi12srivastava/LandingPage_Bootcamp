import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuA7wjixj25Jo9_KvGs1onMqYj6fFKgJs",
  authDomain: "bootcamp-form-22895.firebaseapp.com",
  projectId: "bootcamp-form-22895",
  storageBucket: "bootcamp-form-22895.firebasestorage.app",
  messagingSenderId: "1037394034454",
  appId: "1:1037394034454:web:5fe4b80bda35ecca46da37",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
