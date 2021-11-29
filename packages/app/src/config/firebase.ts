import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.DRILLZ_APP_API_KEY,
  authDomain: process.env.DRILLZ_APP_AUTH_DOMAIN,
  projectId: process.env.DRILLZ_APP_PROJECT_ID,
  storageBucket: process.env.DRILLZ_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.DRILLZ_APP_MESSENGER_SENDER_ID,
  appId: process.env.DRILLZ_APP_APP_ID,
  measurementId: process.env.DRILLZ_APP_MEASUREMENT_ID
};

const fire = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const analytics = getAnalytics(fire);

export default fire;
export { 
  db, 
  auth, 
  collection, 
  getDocs, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword
};