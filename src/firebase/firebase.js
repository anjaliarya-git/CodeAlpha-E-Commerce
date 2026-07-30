import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7QsSiNgA8ZbPmIvpCicv9NgnF8VWiEpk",
  authDomain: "codealpha-ecommerce-2.firebaseapp.com",
  projectId: "codealpha-ecommerce-2",
  storageBucket: "codealpha-ecommerce-2.firebasestorage.app",
  messagingSenderId: "757265828576",
  appId: "1:757265828576:web:5f8a583debccdd4b5f1e85",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;