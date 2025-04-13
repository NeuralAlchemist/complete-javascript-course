'use strict';

/* Write your code below. Good luck! 🙂 */

const mark = {fullName: "Mark Miller", mass: 78, height: 1.69};
const john = {fullName: "John Smith", mass: 92, height: 1.95};


/** @typedef {{fullName: string, mass: number, height: number}} Person */

/** 
 * @param {Person} person  
 * */
function calcBMI(person){
    return person.mass/(person.height * person.height)
}

/**
 * 
 * @param {number} billValue 
 * @returns {number}
 */
function calcTip(billValue){
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = bills.map(calcTip);
let totals = bills.map((bill, i) => (bill + tips[i]));
console.log(totals);