
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxPlGbaeA9iLHKjeFRBKQqDmUKnb143kQ",
  authDomain: "proyecto-react-levi-gonzalez.firebaseapp.com",
  projectId: "proyecto-react-levi-gonzalez",
  storageBucket: "proyecto-react-levi-gonzalez.appspot.com",
  messagingSenderId: "246779243707",
  appId: "1:246779243707:web:da7d837def346c28e0cd9e"
};

const app = initializeApp(firebaseConfig);

export const firebaseConnections= () => app