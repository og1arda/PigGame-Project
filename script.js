'use strict';

//Selecting elements
const score0 = document.getElementById('score--0');
const score1 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

//Rolling func
btnRoll.addEventListener('click', function () {});
