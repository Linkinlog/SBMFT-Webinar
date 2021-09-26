// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBi-jR4EdInfwUSbACd0PSNwRa9QRQNKaY',
	authDomain: 'sbmft-webinars.firebaseapp.com',
	projectId: 'sbmft-webinars',
	storageBucket: 'sbmft-webinars.appspot.com',
	messagingSenderId: '1080989994907',
	appId: '1:1080989994907:web:f38f4d67a106774fefdb3e',
	measurementId: 'G-KRGVQL9C0F',
};
// Configure FirebaseUI.
export const uiConfig = {
	// Popup signin flow rather than redirect flow.
	signInFlow: 'popup',
	// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
	callbacks: {
		// Avoid redirects after sign-in.
		signInSuccessWithAuthResult: () => false,
	},
	// We will display Google and Facebook as auth providers.
	signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
