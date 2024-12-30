// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP8bCiQKGj96KYUXj_fayMEUF-bf8fzmg",
  authDomain: "my-next-app-c6c61.firebaseapp.com",
  projectId: "my-next-app-c6c61",
  storageBucket: "my-next-app-c6c61.firebasestorage.app",
  messagingSenderId: "493737832814",
  appId: "1:493737832814:web:7e0f41f43207681b01117f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app