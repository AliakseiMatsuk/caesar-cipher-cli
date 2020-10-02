const { pipeline } = require('stream');
const { getParams } = require('./params');
const { validateParams, getInput, getOutput } = require('./utils');
const { CaesarCipher } = require('./transformer');

const { input, output, shift, action } = getParams();

validateParams(shift, action);

const read = getInput(input);
const write = getOutput(output);
const caesar = new CaesarCipher({ shift, action });

pipeline(
  read,
  caesar,
  write,
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  }
)