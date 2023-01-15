import './frenzymidware.css';
import {doc, getDoc, updateDoc} from 'firebase/firestore/lite';
import {System} from '../../../firebase/config';
import { useNavigate} from 'react-router-dom';
import { onLoad, addTimer } from './logic';

const system = new System();

let state = true 

let uid = localStorage.getItem('flash-card-uid')
function FrenzyMid(){
  // const navigate = useNavigate()
  window.onload = function() {
    if (state) {

      // this will be dynamically set so the user can choose which group to study
      const selectedGroup = 'CS'

      const ref = doc(system.db, 'users', uid)
      const field = getDoc(ref).then((doc) => {
          const data = doc.data()
          const flashcards = data.flashcards
          
          Object.keys(flashcards).forEach(element => {
              const card = document.createElement('div')
              card.className = 'frenzy-card'
              card.innerText = element

              card.addEventListener('click', () => {
                localStorage.setItem('selectedGroup', element)
                window.location.assign('/frenzy')})

              document.getElementById('groups').appendChild(card)
        });
          
    })
  }


}
  return (
    <div id="frenzymid">
        <div id = 'title'>choose a topic to study</div>
        <div id = 'groups'></div>
    </div>
  );
}
    

export default FrenzyMid