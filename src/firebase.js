
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCDFtmb5W0seVUqQdgT71cUhwGY_AGICBM",
    authDomain: "sigma-515f1.firebaseapp.com",
    projectId: "sigma-515f1",
    storageBucket: "sigma-515f1.appspot.com",
    messagingSenderId: "245900995519",
    appId: "1:245900995519:web:4c2b7c753f1509c1c94f0a",
    measurementId: "G-QFH6FJD4QE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);