import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB_kjQue1t1f8m3T_BriDMhMXkrBRdTOsI',
  authDomain: 'sahx-7f879.firebaseapp.com',
  databaseURL: 'https://sahx-7f879.firebaseio.com',
  projectId: 'sahx-7f879',
  storageBucket: 'sahx-7f879.appspot.com',
  messagingSenderId: '611416429853',
  appId: '1:611416429853:web:392ed2d8615b5078943df4',
  measurementId: 'G-W1HBHH3SPV',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
