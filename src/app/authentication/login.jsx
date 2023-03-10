import './login.css';
import { System } from '../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

// add register with google account

let system = new System();
let state = true

// loging function
function Login() {
  // const navigate = useNavigate()

  window.onload = function () {
    if (state) {

      const button = document.getElementById('execute')
      document.getElementById('mainslay').addEventListener('click', () => {window.location.assign('/register')})

      button.addEventListener('click', () => {
        // const username = document.getElementById('username').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        signIn(email, password)
      })
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const email = document.getElementById('email').value
          const password = document.getElementById('password').value
          signIn(email, password)
        }
      })
    }
  }

  function signIn(email, password) {
    if (email != '' && password != '') {

      signInWithEmailAndPassword(system.getAuth.auth, email, password).then((promise) => {
        console.log(promise.user.uid, '- user reference')
        console.log('auth accepted')

        localStorage.setItem('flash-card-uid', promise.user.uid)

        // navigate('/dashboard')
        window.location.assign('/dashboard')

        // will throw error if user is not found
      }).catch((error) => {
        console.log(error)
        document.getElementById('error-msg').innerHTML = '*Incorrect email or password'
      console.log('Please fill all fields properly')
      })

    } else {
      document.getElementById('error-msg').innerHTML = '*Please fill all fields properly'
      console.log('Please fill all fields properly')
    }
  }

  return (
    <div className="bodyFr">
      <div className="container1">
        <div id="login">
          <div className="title2">Sign In</div>
          <div className="sub">Welcome Back, log in to continue.</div>
          {/* <input type="text" id = 'username' placeholder='username'></input> */}
          <div>
            <input type="email" id='email' placeholder='email'></input></div>
          <div><input type="password" id='password' placeholder='password'></input></div>
          <div><button className="login" id='execute'>Login</button></div>
          {/* anchor here */}
          <div>Don't have an account, <a id="mainslay">sign up here. </a></div>
          <div id='error-msg'></div>
        </div>
      </div>
    </div>
  );

}


export default Login;
