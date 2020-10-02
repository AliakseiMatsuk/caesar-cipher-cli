const { program } = require('commander');

program
  .storeOptionsAsProperties(false)
  .passCommandToAction(false);

program
  .option('-s, --shift <shift>', 'A shift')
  .option('-i, --input <input>', 'An input file')
  .option('-o, --output <output>', 'An output file')
  .option('-a, --action <action>', 'An action encode/decode')
  .parse(process.argv);

function getParams() {
  return program.opts();
}


module.exports = {
  getParams,
}