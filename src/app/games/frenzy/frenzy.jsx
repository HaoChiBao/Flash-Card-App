import './frenzy.css';
import {doc, getDoc, updateDoc} from 'firebase/firestore/lite';
import {System} from '../../../firebase/config';

const system = new System();

let state = true 

let uid = localStorage.getItem('flash-card-uid')
function Frenzy(){
  window.onload = function() {
  if (state) {

    // this will be dynamically set so the user can choose which group to study
    const selectedGroup = 'CS'
    const frenzy = document.getElementById('frenzy')
    const frenzyTimer = frenzy.querySelector('.timer')

    const ref = doc(system.db, 'users', uid)
    const field = getDoc(ref).then((doc) => {
    const data = doc.data()
    const flashcards = data.flashcards
    
    console.log(flashcards[selectedGroup])

    // let timeout = setTimeout(() => {
    //   console.log('hello')
    // }, 1000)
    
      const timer = {
        prev: Date.now(),
        min: 0,
        sec: 0,
        ms: 0,
        total: 0,
      }
      
      let setLoop = setInterval(() => {
        const now = Date.now() - timer.prev
        timer.prev = Date.now()

        timer.total += now

        timer.ms = Math.round((timer.total%1000)/10)
        timer.sec = Math.floor(timer.total/1000)
        if(timer.total/1000 >= 60) {
          timer.min += 1;
          timer.total = 0;
        }

        frenzyTimer.innerText = `${timer.min}:${timer.sec}:${timer.ms}`
        
      }, 150)
          
    })
  }

  }
  return (
    <div id="frenzy">
        <div className="timer"></div>
        <div id = 'cards'></div>
    </div>
  );
}
    

export default Frenzy