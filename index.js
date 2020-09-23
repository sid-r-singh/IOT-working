// Import stylesheets
import './style.css';

// Write Javascript code!
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBFhmFjnzZslcHs7rJFKoHJQrgzfTVYVeY",
  authDomain: "mt-iot-brn.firebaseapp.com",
  databaseURL: "https://mt-iot-brn.firebaseio.com",
  projectId: "mt-iot-brn",
  storageBucket: "mt-iot-brn.appspot.com",
  messagingSenderId: "414738283359",
  appId: "1:414738283359:web:6c7f71b4c0db262e9dd4ea",
  measurementId: "G-36H6XGSRE4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var ref = database.ref("Tanks/tank1");

ref.on("value", function(snap){
document.getElementById("pnt1").innerHTML = snap.val();
console.log(snap);
window.tan_1a=snap;
console.log(window.tan_1a);
});
console.log(2*window.tan_1a);




