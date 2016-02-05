'use strict';

import roliTeam from 'apps/roli_team';

const routes = [
  [
    /https?:\/\/www.roli.com\/team/, roliTeam,
  ],
];

//
// Takes a URI, returns the name of a suitable controller. Magic.
//
export default function router(location) {
  let i = routes.length;
  while (i--) {
    const [pattern, app] = routes[i];
    if (pattern.test(location)) { return app; }
  }
}
