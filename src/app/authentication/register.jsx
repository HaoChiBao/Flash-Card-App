import './register.css';
import {setDoc, doc} from 'firebase/firestore/lite';
import {System} from '../../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// add register with google account

let system = new System();
let state = true 
function Register() {
  window.onload = function() {
    if (state) {

      const button = document.getElementById('execute') 
      
      button.addEventListener('click', () => {
        const username = document.getElementById('username').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        
        if (username != '' && email != '' && password != '' && password.length >= 6) {
          
          createUserWithEmailAndPassword(system.getAuth.auth, email, password).then((promise) => {
            let uid = promise.user.uid
            console.log(uid, '- user reference')
            
            setDoc(doc(system.db, 'users', uid), {
              username: username,
              flashcards: {
                // title: [cards]
              }
            }).then(() => {
              console.log('success - added in db')
  
              // save uid in local storage
              localStorage.setItem('flash-card-uid', promise.user.uid)

              // redirect to Home page from here
            })
  
          }) .catch((error) => {
            console.log(error)
          })
        
        } else {
          document.getElementById('error-msg').innerHTML = 'Please fill all fields properly'
          console.log('Please fill all fields properly')
        }

      })
    }
  }

  return (
    <div id="register">
      <input type="text" id = 'username' placeholder='username'></input>
      <input type="email" id = 'email' placeholder='email'></input>
      <input type="password" id = 'password' placeholder='password'></input>
      <button id = 'execute'>click</button>
      <div id = 'error-msg'></div>
    </div>
  );

}



export default Register;
