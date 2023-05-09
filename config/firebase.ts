import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOiikuGQnaa6pi1bDfu1PYdqGZE3U5K3M",
  authDomain: "nextjs-firebase-auth-80656.firebaseapp.com",
  projectId: "nextjs-firebase-auth-80656",
  storageBucket: "nextjs-firebase-auth-80656.appspot.com",
  messagingSenderId: "375570491281",
  appId: "1:375570491281:web:f37ed7a24d850e8c715c30",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();