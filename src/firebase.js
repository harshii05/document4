import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
console.log(",gjhjgjhfjgj",process.env.REACT_APP_FIREBASE_API_KEY)

const app = firebase.initializeApp({
  apiKey: "AIzaSyDOLT3lf9VSWcE4Ui9Y2r0HDUmuEerli1g",
  authDomain:"doc2907.firebaseapp.com" ,
  databaseURL: "doc2907",
  projectId: "doc2907.appspot.com",
  storageBucket:"531827782374",
  messagingSenderId:"1:531827782374:web:8d3e76499501ba8fb60127" ,
  appId: "G-2V75G68W6N",
})

let firestore = firebase.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
