import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeKBzp2cXqPOvGj7NRAXtB2eF0QLBVENI",
  authDomain: "jithan-a4e87.firebaseapp.com",
  databaseURL: "https://jithan-a4e87-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jithan-a4e87",
  storageBucket: "jithan-a4e87.appspot.com",
  messagingSenderId: "930960779167",
  appId: "1:930960779167:web:292f7755e59650d2f63faa",
  measurementId: "G-4YZXJMG6JJ"
};

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { app, db }