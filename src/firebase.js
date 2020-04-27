import firebase  from "firebase";

const config = {
    apiKey: "AIzaSyD6m-jYJOFb5YwiFCG_73quVHg8lrmPGcw",
    authDomain: "react-todo-70901.firebaseapp.com",
    databaseURL: "https://react-todo-70901.firebaseio.com",
    projectId: "react-todo-70901",
    storageBucket: "react-todo-70901.appspot.com",
    messagingSenderId: "96087336625",
    appId: "1:96087336625:web:8e0e936f9e323d4907a490"
}

firebase.initializeApp(config);

export const db = firebase.firestore();
