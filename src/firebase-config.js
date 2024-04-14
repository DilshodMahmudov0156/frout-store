import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPUDCBi7vJ5G2IVSzZVWfI5snVP8XUiiQ",
    authDomain: "fruits-a13b6.firebaseapp.com",
    projectId: "fruits-a13b6",
    storageBucket: "fruits-a13b6.appspot.com",
    messagingSenderId: "244070950114",
    appId: "1:244070950114:web:b05233d68ab9cc2effaabb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);