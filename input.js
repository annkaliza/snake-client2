let connection;




 const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => handleUserInput(key));
  return stdin;
};

const handleUserInput = function (key) {
    if (key === "\u0003") {
      process.exit();
    }
connection.on('data', (data = 'Move: up') => {
  const stdout= process.stdout;
  stdout.write("Say: HELLO");

});
};


module.exports = { setupInput };