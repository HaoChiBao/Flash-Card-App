import './frenzystats.css';
import {System} from '../../../firebase/config';
import {doc, getDoc, updateDoc} from 'firebase/firestore/lite';

import { useNavigate} from 'react-router-dom';
// window.location.reload()

const system = new System();

let state = true
let uid = localStorage.getItem('flash-card-uid')
let score = JSON.parse(localStorage.getItem('frenzy-stats'))
function Frenzystats(){
    console.log(score)
    window.onload = function() {
        if(state){
            const gameStats = document.getElementById('game-stats')
            gameStats.innerText = `It took you ${score.time.min} minute(s) and ${score.time.sec} second(s) to correctly match ${score.cardAmount} cards!`

    
            const ref = doc(system.db, 'users', uid)
            const field = getDoc(ref).then((doc) => {
                const data = doc.data()
    
            })
    
        }
        state = false
    }
    return (
        <div id="frenzystats">
            <div id = 'game-stats'>
            
            </div>
            <div id = 'time'></div>
            <div id = 'buttons'>
                <button id = 'review'>review</button>
                <button id = 'play again!'>done</button>
            </div>
        </div>
    );
}
    

export default Frenzystats