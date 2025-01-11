import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUiQeXEzNio06qeLjVa9N5WRb7SUdQVJQ",
  authDomain: "ecom-b643e.firebaseapp.com",
  projectId: "ecom-b643e",
  storageBucket: "ecom-b643e.appspot.com",
  messagingSenderId: "875942319058",
  appId: "1:875942319058:web:f3d227a832efce12446e0b",
  measurementId: "G-F0FWCYR0DM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { auth, analytics, db };
