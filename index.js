const { pipeline } = require('stream');
const fs = require('fs');
const path = require('path');
const { program } = require('commander');

const { CaesarCipher } = require('./transformer');

program
  .storeOptionsAsProperties(false)
  .passCommandToAction(false);

program
  .option('-s, --shift <shift>', 'A shift')
  .option('-i, --input <input>', 'An input file')
  .option('-o, --output <output>', 'An output file')
  .option('-a, --action <action>', 'An action encode/decode')
  .parse(process.argv)

const { shift, input, output, action } = program.opts();
const read = input ? fs.createReadStream(path.join(__dirname, input), {
  encoding: 'utf8',
}) : process.stdin;
const write = output ? fs.createWriteStream(path.join(__dirname, output), {
  flags: 'a',
  encoding: 'utf8'
}) : process.stdout;
const encode = new CaesarCipher({ shift, action });

if (!/^-?\d+$/.test(shift)) {
  console.error('Shift is not an integer');
  process.exit(1);
}

if (shift < 0 || shift >= 26) {
  console.error('Shift is out of range');
  process.exit(1);
}

pipeline(
  read,
  encode,
  write,
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  }
)