import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJc60sJ1O6xEQaw4FPsnUVSGmHOdkyizI",
  authDomain: "web-project-9e11a.firebaseapp.com",
  projectId: "web-project-9e11a",
  storageBucket: "web-project-9e11a.appspot.com",
  messagingSenderId: "719348107089",
  appId: "1:719348107089:web:eb090bbc819804dbb4f570",
  measurementId: "G-CL7F7M543G",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
