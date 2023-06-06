
const firebaseConfig = {
    apiKey: "AIzaSyAseB0RmlDTbt8O5VG7Qc3CAUwxF_TY9Nw",
    authDomain: "ab-school-52f07.firebaseapp.com",
    databaseURL: "https://ab-school-52f07.firebaseio.com",
    projectId: "ab-school-52f07",
    storageBucket: "ab-school-52f07.appspot.com",
    messagingSenderId: "1046171942187",
    appId: "1:1046171942187:web:4b13d89f2c5f0948d5196e",
    measurementId: "G-2BF832P6N9"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

// Get a reference to the database node for email and password
var usersRef = database.ref("users");

// Function to handle user registration
function UserRegister(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    usersRef.push({email: email, password: password})
        .then(function(){
            window.open("https://targetjobs.co.uk/careers-advice/job-descriptions/graphic-designer-job-description","_self");
            console.log("sent");
            document.getElementById('form').reset();
        }).catch(function (error){
            console.error(error);
            alert("Error signing up");
        });
}

// Function to handle user sign-in
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    // Check if the email and password match any user in the database
    usersRef.orderByChild("email").equalTo(email).once("value", function(snapshot) {
        if (snapshot.exists()) {
            snapshot.forEach(function(childSnapshot) {
                var childData = childSnapshot.val();
                if (childData.password === password) {
                    // If the email and password match, redirect the user to Google
                    window.open("https://www.google.com","_self");
                } else {
                    alert("Incorrect password");
                }
            });
        } else {
            alert("User does not exist");
        }
    });
}

// Add event listener to the form submit button
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    UserRegister();
});
