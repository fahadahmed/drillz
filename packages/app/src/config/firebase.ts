import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	getDocs,
	connectFirestoreEmulator,
} from 'firebase/firestore/lite';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	connectAuthEmulator,
} from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: process.env.DRILLZ_APP_API_KEY,
	authDomain: process.env.DRILLZ_APP_AUTH_DOMAIN,
	projectId: process.env.DRILLZ_APP_PROJECT_ID,
	storageBucket: process.env.DRILLZ_APP_STORAGE_BUCKET,
	messengerSenderId: process.env.DRILLZ_APP_MESSENGER_SENDER_ID,
	appId: process.env.DRILLZ_APP_APP_ID,
	measurementId: process.env.DRILLZ_APP_MEASUREMENT_ID,
};

const fire = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const analytics = getAnalytics();

connectFirestoreEmulator(db, 'localhost', 8080);
connectAuthEmulator(auth, 'http://locahost:9099');

export default fire;
export {
	db,
	auth,
	collection,
	getDocs,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	analytics,
};
