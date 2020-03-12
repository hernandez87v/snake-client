/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
// Stores the active TCP connection object.
let connection;

handleUserinput = key => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserinput);

  return stdin;
};

module.exports = { setupInput };

// setTimeout(() => {
//   process.stdout.write('.\x07');
// }, key * 1000);
