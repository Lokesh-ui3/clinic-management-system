// src/firebaseInit.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDoNQ91eG0isnBQ12B_v8yAF08eCh7x09Y",
  authDomain: "clinic-management-system-d5119.firebaseapp.com",
  projectId: "clinic-management-system-d5119",
  storageBucket: "clinic-management-system-d5119.appspot.com", 
  messagingSenderId: "802280019417",
  appId: "1:802280019417:web:7dcd5f72d4d23ea77eb5c8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
