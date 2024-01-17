// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAu7QYwBkysXptQJbiNvLuVCIySJelVdYY",
  authDomain: "succinic08.firebaseapp.com",
  projectId: "succinic08",
  storageBucket: "succinic08.appspot.com",
  messagingSenderId: "666266421716",
  appId: "1:666266421716:web:18bc4f939cb0b1b977ee41",
  databaseURL: "https://succinic08-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
