'use strict';

import { gatherTeam } from 'controllers/roli_team';

describe('tests', () => {
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
      const expected = [
        { image: 'bar.png', name: 'Grace Hopper' },
        { image: 'foo.png', name: 'Matt Damon' },
      ];
      assert.deepEqual(result, expected);
    });
  });
});
