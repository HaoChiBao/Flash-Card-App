let totalPairs = 0

function onLoad(board, cards) {
    let randomOrder = [];

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
        card.style.backgroundColor = 'yellow'
    } else {
        if(prevCard.id == card.id) {
            prevCard.style.backgroundColor = 'green';
            card.style.backgroundColor = 'green';

            totalPairs--;
            prevCard = null;
        } else {
            prevCard.style.backgroundColor = 'red';
            card.style.backgroundColor = 'red';
            setTimeout(() => {
                prevCard.style.backgroundColor = 'transparent';
                card.style.backgroundColor = 'transparent';

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
    clearInterval(timer.setLoop)
    console.log('You win!')
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

        element.innerText = `${timer.min}:${timer.sec}:${timer.ms}`
        
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