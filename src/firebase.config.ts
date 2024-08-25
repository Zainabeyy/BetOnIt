import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCF_oUFidZfNl71Y7lr2_SPg-XycALe5A0",
  authDomain: "bet-on-it-crm-email.firebaseapp.com",
  projectId: "bet-on-it-crm-email",
  storageBucket: "bet-on-it-crm-email.appspot.com",
  messagingSenderId: "385251402650",
  appId: "1:385251402650:web:f9b954aa75be03fdd3d023",
  databaseURL:
    "https://bet-on-it-crm-email-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);