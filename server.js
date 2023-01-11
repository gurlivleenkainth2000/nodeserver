const http = require('http');
const SERVER_PORT = process.env.PORT ?? 3000;
const SERVER_HOSTNAME = "127.0.0.1";

const server = http.createServer();
server.on("request", (req, res) => {
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({
    "platform": process.platform,
    "date": new Date(),
    "message": "Hellos"
  }));

})

server.listen(SERVER_PORT, SERVER_HOSTNAME, () => {
  console.log(`Server is up and listening on port ${SERVER_PORT}`);
})