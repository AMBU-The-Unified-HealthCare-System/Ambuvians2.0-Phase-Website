import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBVLMEKCFSZSlufCSOZgoXZ3v-SwjqxlkU",
    authDomain: "ambuvians-34379.firebaseapp.com",
    projectId: "ambuvians-34379",
    storageBucket: "ambuvians-34379.appspot.com",
    messagingSenderId: "644105765143",
    appId: "1:644105765143:web:7d381e72f7cd44dee37752",
    measurementId: "G-6R26TTEX7E"
  };
  

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  db.settings({timestampsInSnapshots: true});
  export {db,app, auth, googleProvider};
  