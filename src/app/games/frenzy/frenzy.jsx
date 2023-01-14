import './frenzy.css';
import {doc, getDoc, updateDoc} from 'firebase/firestore/lite';
import {System} from '../../../firebase/config';
import { useNavigate} from 'react-router-dom';
import { onLoad, addTimer } from './logic';

const system = new System();

let state = true 

let uid = localStorage.getItem('flash-card-uid')
function Frenzy(){
  const navigate = useNavigate()
  window.onload = function() {
    if (state) {

      // this will be dynamically set so the user can choose which group to study
      const selectedGroup = 'CS'

      const frenzy = document.getElementById('frenzy')
      const frenzyTimer = frenzy.querySelector('.timer')
      const game = document.getElementById('cards')

      const ref = doc(system.db, 'users', uid)
      const field = getDoc(ref).then((doc) => {
      const data = doc.data()
      const flashcards = data.flashcards
      
      const button = document.getElementById('done')
      button.addEventListener('click', () => {
        button.style.opacity = '0'
        button.style.pointerEvents = 'none'
        navigate('/frenzystats')
      })

      onLoad(game, flashcards[selectedGroup])
    
      addTimer(frenzyTimer)
          
    })
  }


}
  return (
    <div id="frenzy">
        <div className = 'title'>match the flashcards!</div>
        <div className="timer"></div>
        <div id = 'cards'></div>
        <button id = 'done'>done</button>
    </div>
  );
}
    

export default Frenzy