const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  urlInfo = require('url').parse(req.url, true);

  const name = urlInfo.query.name

  res.statusCode = 200
  res.setHeader("Content-Type", "text/html")

  if (name) {
    res.end(`<h1>Hello ${name}</h1>`)
  } else {
    res.end("<h1>Preencha seu nome</h1> <form method='GET'><input name='name' type='text' /><input type='submit' value='Enviar'></form>")
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
});