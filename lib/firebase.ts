import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
// import { getAnalytics, Analytics } from 'firebase/analytics';

// Firebase configuration object
const firebaseConfig = {
  apiKey: 'AIzaSyBUiQeXEzNio06qeLjVa9N5WRb7SUdQVJQ',
  authDomain: 'ecom-b643e.firebaseapp.com',
  projectId: 'ecom-b643e',
  storageBucket: 'ecom-b643e.appspot.com',
  messagingSenderId: '875942319058',
  appId: '1:875942319058:web:f3d227a832efce12446e0b',
  measurementId: 'G-F0FWCYR0DM',
};

// Initialize Firebase app and services
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;
// let analytics: Analytics;

if (typeof window !== 'undefined') {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);

  // Analytics should only be initialized in the browser
  // const { getAnalytics } = require('firebase/analytics');
  // analytics = getAnalytics(app);
}

export { app, auth, db };
