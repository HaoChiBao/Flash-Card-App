import './createFC.css';
import {doc, getDoc, updateDoc} from 'firebase/firestore/lite';
import {System} from '../../../firebase/config';

// add register with google account

let system = new System();
let state = true 

let uid = localStorage.getItem('flash-card-uid')

function CreateFC() {
  window.onload = function() {
    if (state) {
      
        const button = document.getElementById('execute')

        const ref = doc(system.db, 'users', uid)
        
        
        button.addEventListener('click', () => {
            const front = document.querySelector('#card-front textarea').value
            const back = document.querySelector('#card-behind textarea').value
            
            const group = document.getElementById('card-group').value
            const card = {front: front, back: back}

            console.log(uid)
            console.log(front, back)
            
            const field = getDoc(ref).then((doc) => {
                const data = doc.data()
                const flashcards = data.flashcards
                
                if (flashcards[group] == null){
                    flashcards[group] = []
                }
                flashcards[group].push(card)

                updateDoc(ref, {
                    flashcards
                }).then(() => {
                    console.log('success - added in db')
                }).catch((error) => {
                    console.log(error)
                })
            })
        })
    }
  }

  return (
    <div id="create-fc">
        <input type="text" placeholder='group' id="card-group" />
        <div className = 'card' id = 'card-front'>
            <textarea type="text" />
        </div>
        <div className = 'card' id = 'card-behind'>
            <textarea type="text" />
        </div>
        <button id = 'execute'>click</button>
    </div>
  );

}


export default CreateFC;
