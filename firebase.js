import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDmZ5QAqSl6iEhmpRtZereljC5lOjgX0hs",
    authDomain: "reactnative-a9eeb.firebaseapp.com",
    databaseURL: "https://reactnative-a9eeb.firebaseio.com",
    projectId: "reactnative-a9eeb",
    storageBucket: "reactnative-a9eeb.appspot.com",
    messagingSenderId: "1043948040895",
    appId: "1:1043948040895:web:d33a944e70e563b6bd8c0a",
    measurementId: "G-JRYZBYQ0FN"
};

firebase.initializeApp(firebaseConfig);

export default firebase;