/* global exports */

'use strict';

exports.config = {
  files: {
    javascripts: {
      joinTo: {
        'clippy.js': /^app/,
      },
    },
  },

  modules: {
    autoRequire: {
      'clippy.js': ['main'],
    },
  },

  plugins: {
    babel: {
      ignore: [/\/vendor\//],
    },
  },
};
