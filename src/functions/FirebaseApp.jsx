import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAfxKAl9_lKc9EaCXieTR-bLepzmZMlfwQ",
    authDomain: "prestotype-b9e2e.firebaseapp.com",
    projectId: "prestotype-b9e2e",
    storageBucket: "prestotype-b9e2e.appspot.com",
    messagingSenderId: "455708689237",
    appId: "1:455708689237:web:9f3067a20e9183eb2e65dc"
  };

const app = initializeApp(firebaseConfig);

export { app };
