'use strict';

import view from 'views/roli_team';

let domImg;
let domOps;
let domRes;
let team;

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
  domOps = container.querySelector('.clippy-roli-team .clippy-team-option');
}

function call() {
  team = gatherTeam();
  insertView();
}

export default { name: 'ROLI Team', call, gatherTeam };
