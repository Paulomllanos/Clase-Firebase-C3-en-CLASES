// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVA-7nCl6vAXVxUFhgA7XLQGgGDUvrI0A",
  authDomain: "proyetco4c3.firebaseapp.com",
  projectId: "proyetco4c3",
  storageBucket: "proyetco4c3.appspot.com",
  messagingSenderId: "1093513731658",
  appId: "1:1093513731658:web:35a642044fb7f7f12c90b3"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

//USAR SERVICIOS

// servicio de autenticacion
export const auth = getAuth(appFirebase)
//servicio de fireStore (base de datos)
export const db = getFirestore(appFirebase)