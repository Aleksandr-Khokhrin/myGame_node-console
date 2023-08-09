const crypto = require('crypto');
const Table = require('cli-table');

const moves = process.argv.slice(2);
const moveCount = moves.length;
const halfMoveCount = Math.floor(moveCount / 2);
const uniqueArray = [...new Set(moves)]

if (process.argv.length < 4 || process.argv.length % 2 === 0) {
  console.log('Usage: node game.js move1 move2 move3 ...');
  process.exit(1);
}else if(uniqueArray.length !== moves.length){
  console.log('Use different elements')
  process.exit(1);
}

const key = crypto.randomBytes(32).toString('hex');

const computerMoveIndex = Math.floor(Math.random() * moveCount);
const computerMove = moves[computerMoveIndex];

function computeHMAC(data, key) {
  const hmac = crypto.createHmac('sha256', key);
  hmac.update(data);
  return hmac.digest('hex');
}

console.log(`HMAC: ${computeHMAC(computerMove, key)}`);
console.log('Available moves:');
moves.forEach((move, index) => {
  console.log(`${index + 1} - ${move}`);
});
console.log('0 - exit');
console.log('? - help');

function enter(){
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('Enter your move: ', (userInput) => {
  console.log('--------------------')
  rl.close();
  enterInput(userInput)
});
}

function finishEnter(){
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter your move: ', (input) => {
    rl.close();
    finishMenu(input)
  });
}

function finishMenu(input){
  if (input === '?' || input === 'help') {
    getTable();
  } else if (input === '0') {
    console.log('Exiting the game');
  } else if(input !== '?' || input !== 'help' || input !== '0' || input !== 'exit'){
    console.log('Invalid input. Please enter "0" or "?"')
    console.log('0 - exit');
    console.log('? - help');
    finishEnter()
  }
}

function enterInput(userInput){
  const userMoveIndex = parseInt(userInput);
  if (userInput === '?' || userInput === 'help') {
    console.log('Usage: Enter the number corresponding to your move and press Enter');
    enter()
  } else if (isNaN(userMoveIndex) || userMoveIndex < 0 || userMoveIndex > moveCount) {
    console.log('Invalid input. Please enter a valid move number');
    enter()
  } else if (userMoveIndex === 0) {
    console.log('Exiting the game.');
  } else {
    const userMove = moves[userMoveIndex - 1];

    const moveDiff = (moveCount + userMoveIndex - (computerMoveIndex + 1)) % moveCount;
    let result;
    if (moveDiff === 0) {
      result = "It's a draw!";
    } else if (moveDiff <= halfMoveCount) {
      result = 'You win!';
    } else {
      result = 'You lose!'
    }

    console.log(`Your move: ${userMove}`);
    console.log(`Computer move: ${computerMove}`);
    console.log(result);

    console.log(`HMAC key: ${key}`);
    console.log('0 - exit');
    console.log('? - help');
    finishEnter()
  }
}
enter()

async function getTable() {
    const chalk = (await import('chalk')).default;
    myArrayChalk = moves.map(elem => {
        return chalk.green(elem)
    })
    myArrayChalk.unshift('v PC | User >')
    const tableString = new Table({
        head: [...myArrayChalk]
    });
    for(i = 0; i < moves.length; i++){
      let resultTable = moves.map((elem, j) =>{
        let sum = (moveCount + (i) - j) % moveCount;
      if (moves[i] === elem) {
        return "Draw";
      } else if (sum <= halfMoveCount) {
        return 'Lose'
      } else {
        return 'Win';
      }
      })
      tableString.push([chalk.blue(moves[i]), ...resultTable]);
    }
    console.log(tableString.toString());
}