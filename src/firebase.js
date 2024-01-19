import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: process.eve.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.eve.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.eve.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.eve.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.eve.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.eve.REACT_APP_FIREBASE_APP_ID
})

export const auth = app.auth()
export default app