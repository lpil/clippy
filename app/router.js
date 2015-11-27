'use strict';

const routes = [
  [
    /https?:\/\/www.roli.com\/team/, 'actions/roli_team',
  ]
];

export default function router(location) {
  let i = routes.length;
  while (i--) {
    const [pattern, path] = routes[i];
    if (pattern.test(location)) { return path; }
  }
}
