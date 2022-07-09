import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyClXo1DwIghrc1tFcIuLAHEv3euq9I61Po',
	authDomain: 'journal-de6b6.firebaseapp.com',
	projectId: 'journal-de6b6',
	storageBucket: 'journal-de6b6.appspot.com',
	messagingSenderId: '287110323701',
	appId: '1:287110323701:web:2ce2545a14c468866a94bc',
};

const app = initializeApp(firebaseConfig);

export const DB = getFirestore(app);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
