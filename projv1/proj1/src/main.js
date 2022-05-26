import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTAAPLKbsix56TPdwP5k5tN-21UfJMFLE",
  authDomain: "projt1-8a5e4.firebaseapp.com",
  projectId: "projt1-8a5e4",
  storageBucket: "projt1-8a5e4.appspot.com",
  messagingSenderId: "1003301538820",
  appId: "1:1003301538820:web:e54fd425294b231c12b951"
};

// Initialize Firebase
initializeApp(firebaseConfig);
