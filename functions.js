let jonSnowHealth = 100

// jonSnowHealth = String(jonSnowHealth)
// jonSnowHealth = toString(jonSnowHealth)
//converting to number
// jonSnowHealth = parseInt(jonSnowHealth)

//converting to Boolean
// jonSnowHealth = Boolean(jonSnowHealth)

//converting using str coercion
// jonSnowHealth =jonSnowHealth + 'health'
// console.log(typeof jonSnowHealth)

// jonSnowHealth = 'health -' + jonSnowHealth
console.log(jonSnowHealth)

let theWinnerIs = 'Jamie is the winner'
//replace
theWinnerIs = theWinnerIs.replace('Jamie', 'Jon')

let newWinner = theWinnerIs.toLowerCase().replace('jamie', 'Jon')
console.log(theWinnerIs)

//includes
if(newWinner.toLowerCase().includes('jon')){
    console.log('replaced successfully')
}else {
    console.log('not replaced')
}

//convert to kebab-case eg. jon-is-the-winner
// let newWinnerReplace = newWinner.replaceAll(' ', '-')

// let newWinnerLower = newWinner.toLowerCase()
// let newWinnerLowerSplit = newWinnerLower.split(' ')
// let newWinnerKebab = newWinnerLowerSplit.join('-')

let newWinnerKebab = newWinner.toLocaleLowerCase().split(' ').join('-')
console.log(newWinnerKebab)

isJonAlive()
function isJonAlive() {
    if(jonSnowHealth > 0) {
        console.log('Jon is alive!')
    } else {
        console.log('RIP Jon Snow')
    }
}
//arrow function
// const isJonAlive =() => {
//     if(jonSnowHealth > 0) {
//         console.log('Jon is alive!')
//     } else {
//         console.log('RIP Jon Snow')
//     }
// }

function surpriseAttack(attack) {
    jonSnowHealth -= attack;
    isJonAlive()
}
surpriseAttack(20)
surpriseAttack(10)
surpriseAttack(40)
surpriseAttack(40)
console.log(jonSnowHealth)

//multiple params can be used
function greeting(person1, person2){
    console.log(`${person1} and ${person2} are saying hello to each other`)
}
greeting('Ned', 'Jon')

// functions with return
function rollDice(){
    let possibleRolls = [1,2,3,4,5,6]
    let randomIndex = Math.floor(Math.random() * possibleRolls.length)
    return possibleRolls[randomIndex]
}
let firstRoll = rollDice()
console.log(firstRoll)

function diceMultiplier(){
    let firstRoll = rollDice()
    let secondRoll = rollDice()
    return firstRoll * secondRoll
}
let multiplierRoll = diceMultiplier()
console.log(multiplierRoll)

for(i=0; i<5; i++) {
    console.log(i)
}
console.log(i + 1)