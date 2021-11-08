// 1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
// - Codice giocatore
// - Nome
// - Cognome
// - Età
// - Media punti fatti per partita
// - Percentuale di successo per tiri da 3 punti
// 2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
// - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
// - la media punti fatti per partita deve essere compresa tra 0 e 50
// - la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
// 3. Stampare Nome, cognome, età e codice giocatore.
// 4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
// 5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.

const player = {
  //   codPlayer: getRandomString(3),
  //   codNumber: getRandomNumber(3),
  codePlayerTot: getCodePlayer(getRandomString(3), getRandomNumber(3)),
  firstName: "John",
  lastName: "Doe",
  age: `22 anni`,
  averagePointsGame: getAveragePoints(0, 50),
  successThreeShots: getSuccessThreeShots(0, 100),
};

const { firstName, lastName, age, codePlayerTot } = player;
console.log(firstName, lastName, age, codePlayerTot);

// Creare un array di 10 giocatori di basket, con le regole sopra indicate

const newPlayers = [];

for (let i = 0; i < 10; i++) {
  let createPlayer;
  createPlayer = getRandomPlayer();
  newPlayers.push(createPlayer);
}

console.log(newPlayers);

/************************
FUNZIONI
************************/

// Generare stringa con lettere casuali
function getRandomString(length) {
  let randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
}

// Generare stringa di numeri casuali
function getRandomNumber(length) {
  let randomChars = "0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
}

// Unire le due stringhe in una complessiva
function getCodePlayer(function1, function2) {
  let code = function1 + function2;
  return code;
}

// Generare un numero intero compreso tra 0 e 50
function getAveragePoints(min, max) {
  return Math.floor(Math.random() * (max + 1));
}

// Generare una % compresa tra 0 e 100
function getSuccessThreeShots(min, max) {
  let numbRandom = Math.floor(Math.random() * (max + 1));
  return `${numbRandom}%`;
}

// Generare giocatore (oggetto)
function getRandomPlayer() {
  let player = {
    codePlayerTot: getCodePlayer(getRandomString(3), getRandomNumber(3)),
    firstName: "Mario",
    lastName: "Rossi",
    age: `25 anni`,
    averagePointsGame: getAveragePoints(0, 50),
    successThreeShots: getSuccessThreeShots(0, 100),
  };
  return player;
}
