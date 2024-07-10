import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCPUDCBi7vJ5G2IVSzZVWfI5snVP8XUiiQ",
    authDomain: "fruits-a13b6.firebaseapp.com",
    databaseURL: "https://fruits-a13b6-default-rtdb.firebaseio.com",
    projectId: "fruits-a13b6",
    storageBucket: "fruits-a13b6.appspot.com",
    messagingSenderId: "244070950114",
    appId: "1:244070950114:web:b05233d68ab9cc2effaabb"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);