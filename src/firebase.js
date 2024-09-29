// // import firebase from "firebase/app";
// // import "firebase/firestore";

// // // Config
// // const firebaseConfig = {
// //   apiKey: "AIzaSyAa-iiou7j-g141QLfSvfJTnLT4LJZl4ow",
// //   authDomain: "safka-1b0f9.firebaseapp.com",
// //   projectId: "safka-1b0f9",
// //   storageBucket: "safka-1b0f9.appspot.com",
// //   messagingSenderId: "356912749171",
// //   appId: "1:356912749171:web:7548221faf574ef639e806",
// //   measurementId: "G-53T5P7XSQY",
// // };

// // const firebaseInit = firebase.initializeApp(firebaseConfig);

// // export { firebaseInit };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCUNARjUWMQv7291Wlr6W_uSlDgBR9PxFM",
//   authDomain: "first-ecommerce-6e568.firebaseapp.com",
//   projectId: "first-ecommerce-6e568",
//   storageBucket: "first-ecommerce-6e568.appspot.com",
//   messagingSenderId: "752440653413",
//   appId: "1:752440653413:web:c4b8cf2ca15d00d1c7f88c",
//   measurementId: "G-D8R51NF1R3"
// };

// // Initialize Firebase
// export const firebaseInit = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(firebaseInit);




import firebase from "firebase/app";
import "firebase/firestore";

// Config
const config = {

  apiKey: "AIzaSyCUNARjUWMQv7291Wlr6W_uSlDgBR9PxFM",
    authDomain: "first-ecommerce-6e568.firebaseapp.com",
    projectId: "first-ecommerce-6e568",
    storageBucket: "first-ecommerce-6e568.appspot.com",
    messagingSenderId: "752440653413",
    appId: "1:752440653413:web:c4b8cf2ca15d00d1c7f88c",
    measurementId: "G-D8R51NF1R3"
  };

const firebaseInit = firebase.initializeApp(config);

export { firebaseInit };