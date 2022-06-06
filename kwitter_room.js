
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCm2ER3_Jp-OT_1F2Q1e95Wb5yeWTV3pO8",
      authDomain: "kwitter-8c360.firebaseapp.com",
      databaseURL: "https://kwitter-8c360-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "kwitter-8c360",
      storageBucket: "kwitter-8c360.appspot.com",
      messagingSenderId: "467231043379",
      appId: "1:467231043379:web:db89c14987dc6ddfcbd846"
    };
    
    // Initialize Firebase
     firebade.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
