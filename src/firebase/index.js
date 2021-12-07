
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2xOz-TgNxOPEgmAWAEU4hcozSWJmKHCA",
  authDomain: "firebasr-auth.firebaseapp.com",
  projectId: "firebasr-auth",
  storageBucket: "firebasr-auth.appspot.com",
  messagingSenderId: "404556853348",
  appId: "1:404556853348:web:12456cc4ed6c6380442f71"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);