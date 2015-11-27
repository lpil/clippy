'use strict';

// import view from 'views/roli_team';

var container;

function gatherTeam(dom = document) {
  const team  = [];
  const nodes = dom.querySelectorAll('.team-member');
  var i = nodes.length;
  while (i--) {
    const image = nodes[i].children[0].src;
    const name  = nodes[i].children[1].textContent;
    team.push({ image, name });
  }
  return team;
}

function call() {
  container = document.createElement('div');
  container.classList.add('roli-clippy-container');
  document.querySelector('body').appendChild(container);
  const team = gatherTeam();
  console.log(JSON.stringify(team, null, '\t'));
  // container.innerHTML = view();
}

export default { call, gatherTeam };
