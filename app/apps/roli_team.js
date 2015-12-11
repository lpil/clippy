'use strict';

import view from 'views/roli_team';

const numOps = 5;

let domImg;
let domOps;
let domRes;
let team;

function startRound(domImg, domOps, team) {
  let picks = _.chain(team).keys().sample(numOps).value();
  domImg.src = team[picks[0]];
  domImg.dataset.name = picks[0];
  _.chain(picks).shuffle().forEach((pick, i) => {
    domOps[i].textContent = pick;
  }).value();
}

function handleChoice(event) {
  const pick = event.srcElement.innerText;
  if (pick === domImg.dataset.name) {
    alert('You win!');
    startRound(domImg, domOps, team);
    console.log('go');
  } else {
    alert('Try again.');
  }
}

function gatherTeam(dom = document) {
  const team  = {};
  const nodes = dom.querySelectorAll('.team-member');
  _.forEach(nodes, (node) => {
    const image = node.children[0].src;
    const name  = node.children[1].textContent;
    team[name]  = image;
  });
  return team;
}

function insertView() {
  const body = document.querySelector('body');
  body.insertAdjacentHTML('beforeend', view({ n: numOps }));
  const container = body.querySelector('.clippy-roli-team');
  domRes = container.querySelector('.clippy-roli-team .results');
  domImg = container.querySelector('.clippy-roli-team img');
  domOps = container.querySelectorAll('.clippy-roli-team .clippy-team-option');
  _.forEach(domOps, (el) => {
    el.addEventListener('click', handleChoice);
  });
}

function call() {
  team = gatherTeam();
  insertView();
  startRound(domImg, domOps, team);
  console.log(chrome.tabs);
}

export default {
  name: 'ROLI Team',
  call,
  gatherTeam,
  startRound,
};
