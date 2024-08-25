// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBKZmx_gXtQ_8_r-4kizDN79f10Xoz3mRc",
  authDomain: "tradevision-3c543.firebaseapp.com",
  projectId: "tradevision-3c543",
  storageBucket: "tradevision-3c543.appspot.com",
  messagingSenderId: "224401465960",
  appId: "1:224401465960:web:008df110daebbe1cf051dd",
  measurementId: "G-74PSEJ2Q37"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);
