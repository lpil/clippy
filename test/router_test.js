'use strict';

import router from 'router';

function assertRoute(uri, path) {
  return assert.equal(router(uri), path);
}

describe('router', () => {
  it('covers roli.com/team', () => {
    assertRoute('https://www.roli.com/team', 'roli_team');
    assertRoute('http://www.roli.com/team',  'roli_team');
  });
});
