import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getDatabase
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAWg0SRtV4pBwrjF4uTjkKuA1KM__XCkJk",
  authDomain: "chs-chat-d55b3.firebaseapp.com",
  databaseURL: "https://chs-chat-d55b3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chs-chat-d55b3",
  storageBucket: "chs-chat-d55b3.firebasestorage.app",
  messagingSenderId: "512308903790",
  appId: "1:512308903790:web:618081f964481ad3888b7f"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

console.log("Firebase connected");