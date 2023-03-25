//1. enter players name
//2. enter players choice
//3. decide the winner

//b     g       k
//g     k       b
//k     b       g

const prompt = require('prompt-sync')();

const play = ()=>{
        const playerA = prompt('Enter your name: ');
        const playerB = prompt('Enter your name: ');

        const aChoice = prompt(`${playerA} Enter your bet(0/2/5): `);
        const bChoice = prompt(`${playerB} Enter your bet(0/2/5): `);

       if(aChoice==0 && bChoice==2 || aChoice==2 && bChoice==5 || aChoice==5 && bChoice==0){
            console.log(`${playerA} you win!`)
        }else if(aChoice == bChoice){
            console.log(`Tied. Play again.`)
        } else {
            console.log(`${playerB} you win`)
        }
}

const game = play();