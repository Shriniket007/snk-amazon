// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuIyoYOYEC6Wel2sSta1kA0OQmnsByF-c",
  authDomain: "snk-664bf.firebaseapp.com",
  projectId: "snk-664bf",
  storageBucket: "snk-664bf.appspot.com",
  messagingSenderId: "308645717514",
  appId: "1:308645717514:web:58f32d456ba846d83121f3",
  measurementId: "G-QYQSBMBBR1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebaseConfig;
