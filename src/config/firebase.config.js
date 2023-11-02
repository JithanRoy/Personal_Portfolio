import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCGuXjQcpfXpztEbDw0ByfFSOdvDCkYh_8",
    authDomain: "portfolioproject-78eb7.firebaseapp.com",
    projectId: "portfolioproject-78eb7",
    storageBucket: "portfolioproject-78eb7.appspot.com",
    messagingSenderId: "1060170843117",
    appId: "1:1060170843117:web:4d20bd0034814f5cff1de4",
    measurementId: "G-Q3PC0XCD19"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { app, db }