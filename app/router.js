'use strict';

const routes = [
  [
    /https?:\/\/www.roli.com\/team/, 'roli_team',
  ]
];

//
// Takes a URI, returns the name of a suitable controller. Magic.
//
export default function router(location) {
  let i = routes.length;
  while (i--) {
    const [pattern, controller] = routes[i];
    if (pattern.test(location)) { return controller; }
  }
}
