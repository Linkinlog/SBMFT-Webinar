// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API,
	authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
	appId: process.env.REACT_APP_FIREBASE_APPID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth()
