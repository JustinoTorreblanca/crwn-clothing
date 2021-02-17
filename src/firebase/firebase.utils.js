import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBXosUN7orFgvR7ykIXYCM8BvegqjAdi-o",
    authDomain: "crwn-db-a1c1c.firebaseapp.com",
    projectId: "crwn-db-a1c1c",
    storageBucket: "crwn-db-a1c1c.appspot.com",
    messagingSenderId: "683472706083",
    appId: "1:683472706083:web:5908769eecb8c0dd822f96",
    measurementId: "G-RRC14RN58Y"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
//vv checa si hay data y sino crea un nuevo usuario//
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch (error){
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;