import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: conver this file to an .env file
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyApOjjbRsgqwPjkKsV4OR0ge-JwXMnu9X0",
  authDomain: "class-work-26301.firebaseapp.com",
  projectId: "class-work-26301",
  storageBucket: "class-work-26301.appspot.com",
  messagingSenderId: "1014190952032",
  appId: "1:1014190952032:web:ccff44e5ae427a4c08bd05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// TODO:Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app)

