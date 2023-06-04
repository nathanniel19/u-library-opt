// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK9VFysdwWOnByMIRGCuEFpjincR2lkuU",
  authDomain: "u-library-opt.firebaseapp.com",
  projectId: "u-library-opt",
  storageBucket: "u-library-opt.appspot.com",
  messagingSenderId: "836024643616",
  appId: "1:836024643616:web:43f899f0af8efad73bcc45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;