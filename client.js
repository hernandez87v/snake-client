const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.88.177',
    port: 50541
  });
  conn.on('data', data => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('connect', () => {
    conn.write('Name: VLD');
  });

  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };
//console.log('Move: up');
