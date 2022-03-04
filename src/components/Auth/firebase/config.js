import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDLnqtY2K4mp315k7H8Jr966RHtA1u0l2g",
    authDomain: "fakebook-chat.firebaseapp.com",
    projectId: "fakebook-chat",
    storageBucket: "fakebook-chat.appspot.com",
    messagingSenderId: "871656917798",
    appId: "1:871656917798:web:b3692f5d47cf7405b14fe7",
    measurementId: "G-P7FC2E2M89"
};

firebase.initializeApp(firebaseConfig);

export default firebase