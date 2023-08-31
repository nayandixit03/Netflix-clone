import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEBwPQ749K1l7sdfweGgV7C6MHWm-e4",
    authDomain: "primevideo-b5257.firebaseapp.com",
    projectId: "primevideo-b81257",
    storageBucket: "primevideo-b5/5857.appspot.com",
    messagingSenderId: "8849828025093",
    appId: "1:8849885093:web:ed74046dc66255c420c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const firebaseAuth=getAuth(app);