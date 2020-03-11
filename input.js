/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput => {
    if (handleUserInput === '\u0003') {
      process.stdout.write('.\x07');
    }
  });
  return stdin;
};

module.exports = { setupInput };

// setTimeout(() => {
//   process.stdout.write('.\x07');
// }, key * 1000);
