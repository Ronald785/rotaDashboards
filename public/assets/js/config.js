// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFxW_UN8F3ybVdFVtJibdNuU1CkzPgJpY",
    authDomain: "rotadashboards.firebaseapp.com",
    databaseURL: "https://rotadashboards-default-rtdb.firebaseio.com",
    projectId: "rotadashboards",
    storageBucket: "rotadashboards.appspot.com",
    messagingSenderId: "276254502103",
    appId: "1:276254502103:web:1360f65d4047c7408b5492",
    measurementId: "G-ZSZ71W6Q4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//https://firebase.google.com/docs/reference/js/?authuser=1&hl=pt
//https://firebase.google.com/docs/web/setup?authuser=1&hl=pt

//NPM 

//npm install firebase

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAFxW_UN8F3ybVdFVtJibdNuU1CkzPgJpY",
//   authDomain: "rotadashboards.firebaseapp.com",
//   databaseURL: "https://rotadashboards-default-rtdb.firebaseio.com",
//   projectId: "rotadashboards",
//   storageBucket: "rotadashboards.appspot.com",
//   messagingSenderId: "276254502103",
//   appId: "1:276254502103:web:1360f65d4047c7408b5492",
//   measurementId: "G-ZSZ71W6Q4X"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);