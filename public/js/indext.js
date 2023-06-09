



// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
  
}).catch(function (error){
  var errorcode = error.code;
  var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
  var email = document.getElementById('eemail').value;
  var password = document.getElementById('lpassword').value;
  const promise = auth.signInWithEmailAndPassword(email,password);
  promise.catch( e => alert(e.msg));
  window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  var userInfo = datab.push();
  userInfo.set({
      name: getId('fname'),
      email : getId('eemail'),
      password : getId('lpassword')
  });
  alert("Successfully Signed Up");
  console.log("sent");
  document.getElementById('form').reset();
});
function  getId(id){
  return document.getElementById(id).value;
}