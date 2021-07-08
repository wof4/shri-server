const { execFile } = require('child_process');
const { rm } = require('fs/promises');
const path = require('path');
const util = require('util');

const clone = async repoName => {
  await rm(path.resolve(__dirname, '../../repo'), {
    recursive: true,
    force: true,
  });
  await util.promisify(execFile)('git', ['clone', `http://github.com/${repoName}`, 'repo']);
};

module.exports = clone;



