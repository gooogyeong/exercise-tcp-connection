var net = require("net");

var port = 42181;
var host = "127.0.0.1";

var client = new net.Socket();

client.connect(port, host, () => {
  console.log(`Connected to Server : ${host} on ${port}`);
});

client.on("data", (data) => {
  console.log(`Received : ${data}`);
});

client.on("close", (data) => {
  console.log(`Client: Disconnected from Server`);
});