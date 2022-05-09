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

  

// generaimo 16 numeri random da 1 a 100
const listCpuNumberGenerate = [];
    // ciclo 10 volte
    while (listCpuNumberGenerate.length < 16 ) {
        //genero numeri random fra 1 e 100
        let number = getRndInteger(1,100)
        // se il numero generato non e' stato duplicato lo inseriamo nell'array 
        if(!listCpuNumberGenerate.includes(number)){
            listCpuNumberGenerate.push(number);
        }
    }
    console.log(listCpuNumberGenerate);

// chiedo all utente 84 volte di inserire un numero, sempre compreso tra 1 e 100 e l'utente non puo inserire lo stesso numero piu volte
const listUserNumber = []

let userNumber;
do{
     userNumber = Number(prompt("inserisci un numero tra 1 e 100"));  
} while ( userNumber < 10 && !listCpuNumberGenerate.includes(userNumber));


// SE la lista contiene il numero scelto dall'utente si perde
if( listCpuNumberGenerate.includes(userNumber)){
    console.log("hai perso")
    // ALTRIMENTI SE la lista non contiene il numero scelto dall'utente si vince
} else if(!listCpuNumberGenerate.includes(userNumber)){
    console.log("hai vinto")
}


