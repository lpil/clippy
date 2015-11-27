'use strict';

// import view from 'views/roli_team';

var container;

function gatherTeam() {
  const team  = [];
  const nodes = document.querySelectorAll('.team-member');
  var i = nodes.length;
  while (i--) {
    const image = nodes[i].children[0].src;
    const name  = nodes[i].children[1].textContent;
    team.push({ image, name });
  }
  return team;
}

export default function run() {
  container = document.createElement('div');
  container.classList.add('roli-clippy-container');
  document.querySelector('body').appendChild(container);
  const team = gatherTeam();
  console.log(JSON.stringify(team, null, '\t'));
  // container.innerHTML = view();
}
