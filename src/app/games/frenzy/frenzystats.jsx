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
            const home = document.getElementById('home')
            const back = document.getElementById('back')

            home.addEventListener('click', () => {window.location.assign('/dashboard')})
            back.addEventListener('click', () => {window.location.assign('/frenzy')})


            const gameStats = document.getElementById('game-stats')
            const time = document.getElementById('time')
            
            const min = score.time.min
            const sec = score.time.sec

            gameStats.innerText = `It took you ${min} minute(s) and ${sec} second(s) to correctly match ${score.cardAmount} cards, while making ${score.totalWrong} mistake(s)!`

    
            const ref = doc(system.db, 'users', uid)
            const field = getDoc(ref).then((doc) => {
                const data = doc.data()
                let frenzy = data.frenzy.highscore
              

                if(frenzy != null){
                    if(min < frenzy.min ){
                        frenzy = {min, sec}
                    } else if(min === frenzy.min){
                        if(sec < frenzy.sec){
                            frenzy = {min, sec}
                        }
                    }
                } else {
                    frenzy = {min, sec}
                }
                updateDoc(ref, {
                    frenzy: frenzy
                })
                
                time.innerText = `Fastest Time For This Group: ${frenzy.min}m & ${frenzy.sec}s`

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
                <button id = 'home'>home</button>
                <button id = 'back'>play again!</button>
            </div>
        </div>
    );
}
    

export default Frenzystats