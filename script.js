const cards = document.querySelectorAll(".card-title");
const numberInCards = [];

cards.forEach(card => {
    const randomNumber = Math.floor(Math.random() * 100);
    card.innerHTML = randomNumber;
    numberInCards.push(randomNumber);
});

setTimeout(askForNumbers, 3000);


function askForNumbers(){
    const answer = [];
    let number = 1;
    cards.forEach(card => {
        card.style.display = "none";
    });
    while(answer.length < 5){  
        answer.push(parseInt(prompt('Numero' + " " + number)));
        number++;
    }
    console.log(numberInCards, answer);

    for(let i = 0; i < answer.length; i++){
        if(answer[i] != numberInCards[i]){
            document.getElementById("title").innerHTML = "Hai perso!";
        } else{
            document.getElementById("title").innerHTML = "Hai vinto!";
        }
    };
}