// jest.config.js
require('dotenv').config();
const {defaults} = require('jest-config');
module.exports = {
  // ...
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx'],
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.js"
  ],

  // ...
};