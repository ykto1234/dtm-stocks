import firebase, { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

const app = getApps().length ? getApp() : initializeApp(config)

const firestore = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

if (process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true' || process.env.NODE_ENV === 'test') {
  console.log('setup to connect local firebase emulator suite')
  // try {
  //   const config = require('../../../firebase.json')
  //   firestore.useEmulator('localhost', config.emulators.firestore.port)
  //   auth.useEmulator(`http://localhost:${config.emulators.auth.port}`)
  //   storage.useEmulator('localhost', config.emulators.storage.port)
  // } catch {
  //   // do nothing
  // }
}

export { firestore, auth, storage }
