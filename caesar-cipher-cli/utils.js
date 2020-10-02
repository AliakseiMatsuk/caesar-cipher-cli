const fs = require('fs');
const path = require('path');

function validateParams(shift, action) {
  if (!shift || !action) {
    console.error('Missed required params');
    process.exit(1);
  }

  if (!/^-?\d+$/.test(shift)) {
    console.error('Shift is not an integer');
    process.exit(1);
  }

  if (shift < 0 || shift >= 26) {
    console.error('Shift is out of range');
    process.exit(1);
  }
}

function getInput(input) {
  if (input) {
    const readPath = path.join(__dirname, input);

    try {
      fs.accessSync(readPath, fs.constants.F_OK | fs.constants.R_OK);
      return fs.createReadStream(readPath, {
        encoding: 'utf8',
      });
    } catch (error) {
      console.log(`${ readPath } does not exists or it is not readable`);
      process.exit(1);
    }
  }
  return process.stdin;
}

function getOutput(output) {
  if (output) {
    const writePath = path.join(__dirname, output);

    try {
      fs.accessSync(writePath, fs.constants.F_OK | fs.constants.W_OK);
      return fs.createWriteStream(writePath, {
        flags: 'a',
        encoding: 'utf8'
      });
    } catch (error) {
      console.log(`${ writePath } does not exists or it is not writable`);
      process.exit(1);
    }
  }
  return process.stdout;
}

module.exports = {
  validateParams,
  getInput,
  getOutput,
}