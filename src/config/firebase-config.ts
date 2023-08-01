import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
	apiKey: import.meta.env.SECRET_KEY,
	authDomain: "noted-1e0b0.firebaseapp.com",
	projectId: "noted-1e0b0",
	storageBucket: "noted-1e0b0.appspot.com",
	messagingSenderId: "458219168709",
	appId: import.meta.env.APP_ID,
	measurementId: "G-730LZGSVYZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
