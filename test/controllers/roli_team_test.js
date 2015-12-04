'use strict';

import { gatherTeam } from 'apps/roli_team';

describe('gatherTeam', () => {
  it('queries a given document for team members', () => {

    const fakeNodes = [
      { children: [ { src: 'foo.png' }, { textContent: 'Matt Damon' } ] },
      { children: [ { src: 'bar.png' }, { textContent: 'Grace Hopper' } ] },
    ];
    var qsaStub = function(selector) {
      assert.equal(selector, '.team-member');
      return fakeNodes;
    };
    const result = gatherTeam({ querySelectorAll: qsaStub });
    const expected = {
      'Matt Damon':   'foo.png',
      'Grace Hopper': 'bar.png',
    };
    assert.deepEqual(result, expected);
  });
});
