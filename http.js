const http = require("http");
const { EOL } = require("os");
const server = http.createServer((req, res) => {
  // console.log(req.url)
  // res.writeHead(200,{'content-type': 'text/html'})
  // res.write("Hello World From Server Side")
  // res.write('</br>')
  // res.write("<i>Server Side Programming Is Cool</i>");
  const { url } = req;
  if (url == "/") res.end("<h1>Home Page</h1>");
  if (url == "/about") res.end("<h1>About Page</h1>");
  if (url == "/contact") res.end("<h1>Contact Page</h1>");
  // res.end('<h1>Hello <i>World</i></h1>')
});
server.listen(3000, () => {
  console.log("server listening on port 3000");
});
// console.log(http)
