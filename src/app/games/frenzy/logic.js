import './frenzy.css'

let cardAmount = 0
let totalPairs = 0
let totalWrong = 0

function onLoad(board, cards) {

    let randomOrder = [];
    // console.log(cards.length * 2)
    cardAmount = cards.length * 2;
    for(let i = 0; i < cards.length; i++) {
        const card = cards[i]

        // declare front and back of a card
        const cardElementFront = document.createElement('div');
        const cardElementBack = document.createElement('div');
        
        // for css
        cardElementFront.className = 'card';
        cardElementBack.className = 'card';
        
        // to identify matching cards
        cardElementFront.id = `${i}`;
        cardElementBack.id = `${i}`;
        
        // words on the cards
        cardElementFront.innerHTML = card.front;
        cardElementBack.innerHTML = card.back;
        
        randomOrder.push(cardElementFront);
        randomOrder.push(cardElementBack);
        
        totalPairs++
    }
    randomOrder = shuffle(randomOrder);

    // randomly append cards to board
    randomOrder.forEach(element => {
        element.addEventListener('click', (e) => {handleClick(e, element)})
        board.appendChild(element);
    })
}

let prevCard = null;

// handle click event for game 
function handleClick(e, card){
    e.preventDefault();
    console.log(card.id)
    if(prevCard == null) {
        prevCard = card;
        card.style.backgroundColor = '#E7B563'
    } else {
        if(prevCard.id == card.id && prevCard != card) {
            prevCard.style.backgroundColor = '#5B8F8E';
            card.style.backgroundColor = '#5B8F8E';

            prevCard.style.pointerEvents = 'none';
            card.style.pointerEvents = 'none';

            totalPairs--;
            prevCard = null;
        } else {
            totalWrong++;
            prevCard.style.backgroundColor = '#F4B09C';
            card.style.backgroundColor = '#F4B09C';
            setTimeout(() => {
                prevCard.style.backgroundColor = '#D9D9D9';
                card.style.backgroundColor = '#D9D9D9';

                prevCard = null;
            }, 1000);
        }
        console.log('total:', totalPairs)
        if(totalPairs <= 0) {
            gameStop();
        }
    }
}

function gameStop(){
    saveStats();
    clearInterval(timer.setLoop)

    const button = document.getElementById('done');
    button.style.opacity = '1';
    button.style.pointerEvents = 'all';

    console.log('You win!')
}

function saveStats() {
    const stats = {
        cardAmount: cardAmount,
        totalPairs: totalPairs,
        totalWrong: totalWrong,
        time: {
            min: timer.min,
            sec: timer.sec,
            ms: timer.ms,
        }
    }
    console.log('stats saved')
    localStorage.setItem('frenzy-stats', JSON.stringify(stats))
}

const timer = {
    prev: Date.now(),
    min: 0,
    sec: 0,
    ms: 0,
    total: 0,
    setloop: null,
}
function addTimer(element){
      
      timer.setLoop = setInterval(() => {
        const now = Date.now() - timer.prev
        timer.prev = Date.now()

        timer.total += now

        timer.ms = Math.round((timer.total%1000)/10)
        timer.sec = Math.floor(timer.total/1000)
        if(timer.total/1000 >= 60) {
          timer.min += 1;
          timer.total = 0;
        }

        // element.innerText = `${timer.min}:${timer.sec}:${timer.ms}`
        
      }, 150)
}

// shuffle array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  

export { onLoad, gameStop, addTimer}