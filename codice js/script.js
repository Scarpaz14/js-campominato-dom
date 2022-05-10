// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.



// functions-----------
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  

//   MAIN PROGRAM-----------------
// il programma deve chiedere con quale difficolta vogliamo giocare
let difficulty
do{
     difficulty = Number(prompt("inserisci livello di difficolta' tra 0-1-2"))
}while (isNaN(difficulty) || difficulty < 0 || difficulty > 2);

let totalNumbers;
 
if(difficulty===0){
    totalNumbers=100;
}else if(difficulty===1){
    totalNumbers=80;
} else{
    totalNumbers=50;
}

console.log(totalNumbers);

// generaimo 16 numeri random da 1 a 100
const bombsNumber = 16;
const numberPossibility = totalNumbers - bombsNumber;
const listBombs = [];
    // ciclo 10 volte
    while (listBombs.length < bombsNumber  ) {
        //genero numeri random fra 1 e 100
        let number = getRndInteger(1,totalNumbers)
        // se il numero generato non e' stato duplicato lo inseriamo nell'array 
        if(!listBombs.includes(number)){
            listBombs.push(number);
        }
    }
    console.log(listBombs);

// chiedo all utente 84 volte di inserire un numero, sempre compreso tra 1 e 100 e l'utente non puo inserire lo stesso numero piu volte
let bomb = false
let userNumber;
let userList=[];
do{
    let userNumber;
    do{
     userNumber = Number(prompt("inserisci un numero tra 1 e 100"));
    } while( isNaN(userNumber) || userNumber < 1 || userNumber >100);

      if(listBombs.includes(userNumber)){
        bomb=true;
      } else if(userList.includes(userNumber)){
          alert("hai gia inserito questo numero")
      } else{
          userList.push(userNumber);
      }
} while ( userList.length < 84 && !bomb);


// SE la lista contiene il numero scelto dall'utente si perde
if( bomb=true){
    console.log("hai perso")
    // ALTRIMENTI SE la lista non contiene il numero scelto dall'utente si vince
} else {
    console.log("hai vinto")
}

console.log(userList);

