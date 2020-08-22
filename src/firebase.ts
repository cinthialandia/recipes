import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBa_lp68yDYSJ6Cv9Q9ZwxE4S23-hVW8V4",
  authDomain: "recipes-app-b5527.firebaseapp.com",
  databaseURL: "https://recipes-app-b5527.firebaseio.com",
  projectId: "recipes-app-b5527",
  storageBucket: "recipes-app-b5527.appspot.com",
  appId: "1:115217535029:web:e6c2c7fe918b01e843a17c",
};

const app = firebase.initializeApp(config);

export const db = firebase.firestore(app);
