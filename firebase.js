import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_M2pGFL1vmmMU6i_-nTomyyobxo4s39A",
  authDomain: "chat-io-3a95e.firebaseapp.com",
  projectId: "chat-io-3a95e",
  storageBucket: "chat-io-3a95e.appspot.com",
  messagingSenderId: "992215346804",
  appId: "1:992215346804:web:f78cb144fd9d9174ff6b21",
  measurementId: "G-YZZTF49GZN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();