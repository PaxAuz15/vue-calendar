import 'firebase/auth';
import 'firebase/firestore';
import * as firebase from 'firebase/app';

// firebase init
// const firebaseConfig = {
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_AUTH_DOMAIN',
//   databaseURL: 'YOUR_DATABASE_URL',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: 'YOUR_STORAGE_BUCKET',
//   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
//   appId: "YOUR_APP_ID",
//   measurementId: "YOUR_MEASUREMENT_ID"
// };
const firebaseConfig = {
  apiKey: "AIzaSyADK-aQsCWXzs50feF8_ZiY1niwsPIOZXg",
  authDomain: "fir-calendar-9de3a.firebaseapp.com",
  projectId: "fir-calendar-9de3a",
  storageBucket: "fir-calendar-9de3a.appspot.com",
  messagingSenderId: "829344886889",
  appId: "1:829344886889:web:54fcb814a31ef628c072f8"
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection('users');

// export utils/refs
export {
  db,
  auth,
  usersCollection
}
