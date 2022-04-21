import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDcDA5ElXH22MQnK9T4hF0d1ImMszULyng",
  authDomain: "anime-database-1a39c.firebaseapp.com",
  projectId: "anime-database-1a39c",
  storageBucket: "anime-database-1a39c.appspot.com",
  messagingSenderId: "448396468618",
  appId: "1:448396468618:web:a9f26b0c91b8d25e70e873"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;