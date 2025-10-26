// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN8ZRMaErcfdDFc15yxSH4rJ6x7BNMcwA",
  authDomain: "darkcoffeticket-app.firebaseapp.com",
  projectId: "darkcoffeticket-app",
  storageBucket: "darkcoffeticket-app.firebasestorage.app",
  messagingSenderId: "603472796092",
  appId: "1:603472796092:web:32980d1ae6bba4e697b3b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;