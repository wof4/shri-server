const { execFile } = require('child_process');
const path = require('path');
const util = require('util');

const getCommitData = async commitHash => {
  const { stdout: commitData } = await util.promisify(execFile)(
    'git',
    ['log', '-1', '--pretty=format:%H|%an|%s', commitHash],
    { cwd: path.resolve(__dirname, '../../repo') }
  );
  const data = commitData.split('|');

  const { stdout: branchName } = await util.promisify(execFile)(
    'git',
    ['branch', '--contains', commitHash],
    { cwd: path.resolve(__dirname, '../../repo') }
  );

  return {
    commitMessage: data[2],
    commitHash: data[0],
    branchName: branchName,
    authorName: data[1],
  };
};

module.exports = getCommitData;
