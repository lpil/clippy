'use strict';

import view from 'views/roli_team';

function gatherTeam(dom = document) {
  const team  = [];
  const nodes = dom.querySelectorAll('.team-member');
  let i = nodes.length;
  while (i--) {
    const node  = nodes[i];
    const image = node.children[0].src;
    const name  = node.children[1].textContent;
    team.push({ image, name });
  }
  return team;
}

function insertView() {
  document
    .querySelector('body')
    .insertAdjacentHTML('beforeend', view());
}

function call() {
  const team = gatherTeam();
  console.log(JSON.stringify(team, null, '\t'));
  insertView();
}

export default { name: 'ROLI Team', call, gatherTeam };
