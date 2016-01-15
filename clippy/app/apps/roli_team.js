'use strict';

import startButton from 'views/roli_team_start';
import view        from 'views/roli_team';

const numOps = 5;

let domImg;
let domOps;
let domRes;
let team;

function startRound() {
  let picks = _.chain(team).keys().sample(numOps).value();
  domImg.src = team[picks[0]];
  domImg.dataset.name = picks[0];
  _.chain(picks).shuffle().forEach((pick, i) => {
    domOps[i].classList.remove('fade-out');
    domOps[i].textContent = pick;
  }).value();
}

function handleChoice(event) {
  const pick = event.srcElement.innerText;
  event.srcElement.classList.add('fade-out');
  if (pick === domImg.dataset.name) {
    alert('You win!');
    startRound(domImg, domOps, team);
    console.log('go');
  }
}

function gatherTeam(body) {
  const team  = {};
  const nodes = body.querySelectorAll('.team-member');
  _.forEach(nodes, (node) => {
    const image = node.children[0].src;
    const name  = node.children[1].textContent;
    team[name]  = image;
  });
  return team;
}

function insertView(body, win) {
  win.scroll(0, 0);
  body.insertAdjacentHTML('beforeend', view({ n: numOps }));
  const container = body.querySelector('.clippy-roli-team');
  domRes = container.querySelector('.clippy-roli-team .results');
  domImg = container.querySelector('.clippy-roli-team img');
  domOps = container.querySelectorAll('.clippy-roli-team .clippy-team-option');
  _.forEach(domOps, (el) => {
    el.addEventListener('click', handleChoice);
  });
}

function insertStart(body, window) {
  body.insertAdjacentHTML('beforeend', startButton());
  const el = body.querySelector('.clippy-roli-team-start');
  el.onclick = () => {
    insertView(body, window);
    startRound();
  };
  body.appendChild(el);
}

function call() {
  const body = document.querySelector('body');
  team = gatherTeam(body);
  insertStart(body, window);
}

export default {
  name: 'ROLI Team',
  call,
  gatherTeam,
  startRound,
};
