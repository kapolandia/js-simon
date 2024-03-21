const cards = document.querySelectorAll(".card-title");
const numberInCards = [];

cards.forEach(card => {
    const randomNumber = Math.floor(Math.random() * 100);
    card.innerHTML = randomNumber;
    numberInCards.push(randomNumber);
});
setTimeout(() =>{
    cards.forEach(card => {
        card.style.display = "none";
    });
}, 29999);
setTimeout(askForNumbers, 30000);


function askForNumbers(){
    const answer = [];
    let number = 1;
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