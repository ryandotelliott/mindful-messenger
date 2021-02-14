import app from 'firebase/app';
require('dotenv').config();
let admin = require("firebase-admin");
let serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

export default class Firebase {
    constructor() {
        app.initializeApp(config);
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: process.env.FIREBASE_DATABASE_URL
        });
    }

    setData(ref_path, data) {
        let db = admin.database();
        let ref = db.ref(ref_path);

        try {
            ref.set(data);
            console.log("Successfully wrote to Firebase Database.")
        } catch (error) {
            console.log(error)
        }
    }
}
