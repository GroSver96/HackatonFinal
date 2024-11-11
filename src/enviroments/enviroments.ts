// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const environment = {
    production: false,
    firebase: {
  apiKey: "AIzaSyCRC50ixfPi-RGZSoptV_BHPQ6vdyvJB1o",
  authDomain: "hackaton-final.firebaseapp.com",
  projectId: "hackaton-final",
  storageBucket: "hackaton-final.firebasestorage.app",
  messagingSenderId: "1053176790331",
  appId: "1:1053176790331:web:6841b9e43c8e458eb40b1e"
}
};
// Initialize Firebase
const app = initializeApp(environment.firebase);  