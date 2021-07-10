import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyC_o1VSUXuiF9jk3bTVXJD8h9ViVFQWymU",
  authDomain: "login-authentication-b9b15.firebaseapp.com",
  projectId: "login-authentication-b9b15",
  storageBucket: "login-authentication-b9b15.appspot.com",
  messagingSenderId: "649856792573",
  appId: "1:649856792573:web:5ba6e69f2e192643a1cb94",
}
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig)

export default fire
