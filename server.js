const http = require("http");
const port = 8000;
const server = http.createServer(function (req, res) {
  console.log("url: ", req.url);
  console.log("method: ", req.method);
  if (req.url === "/") {
    res.end(`
      <h1>Home Page</h1>
      <h2>Noi dung cua Homepage</h2>
    `);
  }
  if (req.url === "/users") {
    res.end(`
      <h1>users Page</h1>
    `);
  }
});
server.listen(port, () => {
  console.log(`Ung dung dang chay tren port ${port}`);
});
