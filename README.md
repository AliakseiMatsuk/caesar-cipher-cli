Usage example:

1. Install dependencies: npm i
2. Cd caesar-cipher-cli
3. Use one of the following commands:

  - $ node index -a encode -s 7 -i "./input.txt" -o "./output.txt"
  - $ node index --action encode --shift 7 --input "./input.txt" --output "./output.txt"
  - $ node index --action decode --shift 7  --output "./input.txt"
  - $ node index --action decode --shift 7 --input "./input.txt"

  CLI supports next parameters:

  - '-s, --shift <number>', - 'A shift'
  - '-i, --input <string>', - 'An input file'
  - '-o, --output <string>', - 'An output file'  
  - '-a, --action <string>', - 'An action encode/decode'