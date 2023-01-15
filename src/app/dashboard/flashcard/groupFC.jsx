import './groupFC.css';
import {doc, getDoc} from 'firebase/firestore/lite';
import {System} from '../../../firebase/config';

// add register with google account

let system = new System();
let state = true 

let uid = localStorage.getItem('flash-card-uid')

function GroupFC() {
  window.onload = function() {
    if (state) {
      
        const allGroups = document.getElementById('group-fc')

        
        
        const ref = doc(system.db, 'users', uid)
        const field = getDoc(ref).then((doc) => {
          const data = doc.data()
          const flashcards = data.flashcards
          // const cards = Object.keys(flashcards)
          
          Object.keys(flashcards).forEach((group) => {
            let card = document.createElement('div')
            card.className = 'cardio'
            
            let content = document.createElement('div')
            content.className = 'content'
            
                card.addEventListener('click', () => {})

                let title = document.createElement('div')
                title.style.textAlign = 'center'
                title.style.width = '100%'
                title.style.fontSize = '1rem'
                title.innerHTML = group

                card.style.position = 'relative'
                card.appendChild(title)
                
                for(let ams = 0 ; ams < flashcards[group].length; ams++){
                    if (ams >= 4) break
                    let inside = document.createElement('div')
                    inside.className = 'timbits'
                   
                    card.appendChild(inside)
                }
                content.appendChild(card)
                content.appendChild(title)
                allGroups.appendChild(content)
              })
        })
            
            
    }
  }

  return (
    <div id="group-fc">
        <div id = 'title'>your flashcards!</div>
    </div>
  );

}


export default GroupFC;
