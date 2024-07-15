// Import the functions you need from the SDKs you need

import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDkYIQ4j6Sf0hRFMU3Ad0qJsb7YINx402c',
    authDomain: 'journal-app-530b4.firebaseapp.com',
    projectId: 'journal-app-530b4',
    storageBucket: 'journal-app-530b4.appspot.com',
    messagingSenderId: '874190854492',
    appId: '1:874190854492:web:d41a74c62b0f9e9f8c4999',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
