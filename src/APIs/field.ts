import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "oooooops",
  authDomain: "field-37d86.firebaseapp.com",
  projectId: "field-37d86",
  storageBucket: "field-37d86.appspot.com",
  messagingSenderId: "431965194079",
  appId: "1:431965194079:web:61347990fc042f676658ea",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);