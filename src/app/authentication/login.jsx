import './login.css';
import { addDoc, collection } from 'firebase/firestore/lite';
import { System } from '../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

// add register with google account

let system = new System();
let state = true

function Login() {
  window.onload = function () {
    if (state) {

      const button = document.getElementById('execute')

      button.addEventListener('click', () => {
        // const username = document.getElementById('username').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        if (email != '' && password != '') {

          signInWithEmailAndPassword(system.getAuth.auth, email, password).then((promise) => {
            console.log(promise.user.uid, '- user reference')
            console.log('auth accepted')

            localStorage.setItem('flash-card-uid', promise.user.uid)
            // redirect to Home page from here
          }).catch((error) => {
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
    <body>
      <div class="container">
        <div id="login">
          <div class="title1">Sign In</div>
          <div class="sub">Welcome Back, log in to continue.</div>
          {/* <input type="text" id = 'username' placeholder='username'></input> */}
          <div>
            <input type="email" id='email' placeholder='email'></input></div>
          <div><input type="password" id='password' placeholder='password'></input></div>
          <Link to="/dashboard"><div><button className="login" id='execute'>Login</button></div></Link>
          <div id='error-msg'></div>
        </div>
      </div>
    </body>
  );

}


export default Login;