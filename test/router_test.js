'use strict';

import router from 'router';

function assertRoute(uri, name) {
  return assert.equal(router(uri).name, name);
}

describe('router', () => {
  it('covers roli.com/team', () => {
    assertRoute('https://www.roli.com/team', 'ROLI Team');
    assertRoute('http://www.roli.com/team',  'ROLI Team');
  });
});
