import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyB2UinTpHuKdPuZ0uCmSYnvWNhLbvT2e8c",
authDomain: "my-app3-64adc.firebaseapp.com",
projectId: "my-app3-64adc",
storageBucket: "my-app3-64adc.appspot.com",
messagingSenderId: "702519746642",
appId: "1:702519746642:web:84c0011ddfef424091bf8b"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// console.log(firebaseConfig);

// let app;
// if (firebase.apps.length === 0) {
// app = firebase.initializeApp(firebaseConfig);
// } else {
// app = firebase.app()
// }

// const db = firebase.firestore();
// db.collection("product")
// .get()
// .then(snap => {
//     snap.forEach((doc) => {
//     console.log(doc.id);
//     console.log(doc.data());
//     });
// });

// export { db };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);



