     import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase , set,ref } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword , signOut} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBCMvARK7bIqLMbsqVt-uTbbHGFvlQDGqM",
  authDomain: "fire-assignment-1.firebaseapp.com",
  projectId: "fire-assignment-1",
  storageBucket: "fire-assignment-1.appspot.com",
  messagingSenderId: "1081830619985",
  appId: "1:1081830619985:web:b732b808d630379ff27170",
  measurementId: "G-MEDL3GQQDB"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);


document.getElementById('reg-btn').addEventListener('click' , function(){
    document.getElementById('register-div').style.display='inline';
    document.getElementById('login-div').style.display='none';
    document.getElementById('or').style.display='none';
    document.getElementById('right').style.display='none';
})

document.getElementById("log-btn").addEventListener('click' , function(){
    document.getElementById('register-div').style.display='none';
    document.getElementById('login-div').style.display='inline';
    document.getElementById('or').style.display='inline'
    document.getElementById('right').style.display='inline'
})



document.getElementById('login-btn').addEventListener('click' , function(){
const loginEmail =document.getElementById('login-email').value
const loginpassword =document.getElementById('login-password').value

signInWithEmailAndPassword(auth, loginEmail, loginpassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById('or').style.display='none';
    document.getElementById('right').style.display='none';
    document.getElementById('result-box').style.display='inline';
    document.getElementById('login-div').style.display='none';
    document.getElementById('result').innerHTML='Welcome Back <br>'+loginEmail+'Was Login Successfully';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById('or').style.display='none';
    document.getElementById('right').style.display='none';
    document.getElementById('result-box').style.display='inline';
    document.getElementById('login-div').style.display='none';
    document.getElementById('result').innerHTML='Sorry ! <br>'+errorMessage;
  });

})
document.getElementById('register-btn').addEventListener('click' , function(){
    const registerEmail =document.getElementById('register-email').value
    const registerpassword =document.getElementById('register-password').value
    
    createUserWithEmailAndPassword(auth, registerEmail, registerpassword)
      .then((userCredential) => {
        const user = userCredential.user;
        document.getElementById('or').style.display='none';
    document.getElementById('right').style.display='none';
        document.getElementById('result-box').style.display='inline';
        document.getElementById('register-div').style.display='none';
        document.getElementById('result').innerHTML='Welcome <br>'+registerEmail+'Was Registered Successfully';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.getElementById('or').style.display='none';
    document.getElementById('right').style.display='none';
        document.getElementById('result-box').style.display='inline';
        document.getElementById('register-div').style.display='none';
        document.getElementById('result').innerHTML='Sorry ! <br>'+errorMessage;
      });
    
    })

    document.getElementById('log-out-btn').addEventListener('click' , function(){
        signOut(auth).then(() => {
            document.getElementById('or').style.display='inline'
            document.getElementById('right').style.display='inline'
            document.getElementById('result-box').style.display='none';
            document.getElementById('login-div').style.display='inline';
            document.getElementById('login-email').value='';
            document.getElementById('login-password').value='';

          }).catch((error) => {
            document.getElementById('result').innerHTML='Sorry ! <br>'+errorMessage;
          });
    })