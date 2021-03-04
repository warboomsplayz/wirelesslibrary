import * as firebase from 'firebase'
require("@firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyChiZFyl-tbqFEuPq5cfKtKyNh1c0-vJ64",
  authDomain: "willy-app-d0fa2.firebaseapp.com",
  projectId: "willy-app-d0fa2",
  storageBucket: "willy-app-d0fa2.appspot.com",
  messagingSenderId: "222711026015",
  appId: "1:222711026015:web:060a1dbc6fe0c5299fa6ea"
};

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
  