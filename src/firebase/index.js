import firebase from 'firebase/app';
import 'firebase/storage';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAH4qJxff_7W-ib4gJXGPDVFouJ7Xhyzfs",
  authDomain: "renomemo-93b81.firebaseapp.com",
  databaseURL: "https://renomemo-93b81.firebaseio.com",
  projectId: "renomemo-93b81",
  storageBucket: "renomemo-93b81.appspot.com",
  messagingSenderId: "302910896316"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
  storage, firebase as default
}