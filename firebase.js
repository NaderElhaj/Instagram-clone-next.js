// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCcvnUKR18T_F4vhW_oq8PuaYNzsgkt_Zc',
  authDomain: 'instagram-clone-9e3dd.firebaseapp.com',
  projectId: 'instagram-clone-9e3dd',
  storageBucket: 'instagram-clone-9e3dd.appspot.com',
  messagingSenderId: '97670459414',
  appId: '1:97670459414:web:43bee830f0a34591370537',
  measurementId: 'G-DSCZK9EV09',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()
const analytics = getAnalytics(app)
export { app, db, storage }
