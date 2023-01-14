import './groupFC.css';
import {doc, getDoc, updateDoc} from 'firebase/firestore/lite';
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
                const groupCards = document.createElement('div')
                groupCards.className = 'group-card'
                groupCards.id = group
                
                const cards = flashcards[group]
                for(let ams = 0; ams < cards.length; ams++) {
                    const cardDiv = document.createElement('div')
                    cardDiv.className = 'card'
                    cardDiv.id = `${group}-card${ams}`
                    
                    groupCards.appendChild(cardDiv)
                }

                allGroups.appendChild(groupCards)

            })            

        // updateDoc(ref, {
        //     flashcards
        // }).then(() => {
        //     console.log('success - added in db')
        // }).catch((error) => {
        //     console.log(error)
        // })
        })
            
            
    }
  }

  return (
    <div id="group-fc">
        
    </div>
  );

}


export default GroupFC;
