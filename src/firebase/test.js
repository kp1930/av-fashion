import firebase from "firebase/app";
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('2Dkkfcmb5qv9gVIC9WUW').collection('cartItems').doc('321AzfdfkaOtrca47ALu');
firebase.doc('/users/2Dkkfcmb5qv9gVIC9WUW/cartItems/321AzfdfkaOtrca47ALu');
firebase.collection('/users/2Dkkfcmb5qv9gVIC9WUW/cartItems');