'use strict';

import view from 'views/roli_team';

let domImg;
let domOps;
let domRes;
let team;

function handleChoice(event) {
  console.log(event.srcElement.innerText);
}

function startRound(domImg, domOps, team) {
  let i = 3;
  let picks = _.chain(team).keys().sample(3).value();
  domImg.src = team[picks[0]];
  picks = _.shuffle(picks);
  while (i--) {
    domOps[i].textContent = picks[i];
  }
}

function gatherTeam(dom = document) {
  const team  = {};
  const nodes = dom.querySelectorAll('.team-member');
  let i = nodes.length;
  while (i--) {
    const node  = nodes[i];
    const image = node.children[0].src;
    const name  = node.children[1].textContent;
    team[name]  = image;
  }
  return team;
}

function insertView() {
  const body = document.querySelector('body');
  body.insertAdjacentHTML('beforeend', view());
  const container = body.lastChild;
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
}

export default {
  name: 'ROLI Team',
  call,
  gatherTeam,
  startRound,
};
