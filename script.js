'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const rollBtnEl = document.querySelector('.btn--roll');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const current0 = document.getElementById(`current--0`);
const current1 = document.getElementById(`current--1`);
const name0El = document.getElementById('name--0');
const name1El = document.getElementById('name--1');
// starting condition 



// start game
let scores, score, activePlayer, playing;
const intial = function () {
    scores = [0, 0];
    score = 0;
    activePlayer = 0;
    playing = true;

    diceEl.classList.add('hidden');
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    name0El.textContent = (`Player 1`);
    name1El.textContent = (`Player 2`);

}
intial();

const toggle = function () {
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
const rollDice = function () {
    if (playing) {
        const x = Math.trunc(Math.random() * 6) + 1;
        console.log(x);

        if (x !== 1) {
            score += x;
            document.getElementById(`current--${activePlayer}`).textContent = score;
        } else {
            score = 0;
            document.getElementById(`current--${activePlayer}`).textContent = score;

            activePlayer = (activePlayer === 0 ? 1 : 0);
            toggle();
        }
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${x}.png`;
    }

}
rollBtnEl.addEventListener('click', function () {
    rollDice();
});
btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += score;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] < 100) {

            score = 0;
            document.getElementById(`current--${activePlayer}`).textContent = score;
            activePlayer = (activePlayer === 0 ? 1 : 0);
            toggle();
        } else {
            playing = false;
            document.getElementById(`name--${activePlayer}`).textContent = (`WINNER 🥇`);
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player-active');
            diceEl.classList.add('hidden');
        }
    }

})
btnNew.addEventListener('click', intial);


