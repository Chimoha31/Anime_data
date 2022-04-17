import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { createContext } from "react";
import {auth} from '../firebase/firebase';

const userAuthContext = createContext();

