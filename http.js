const fs = require("fs");
const http = require("http");
const {resolve} = require('path')
const { EOL } = require("os");
const server = http.createServer((req, res) => {
  // console.log(req.url)
  // res.writeHead(200,{'content-type': 'text/html'})
  // res.write("Hello World From Server Side")
  // res.write('</br>')
  // res.write("<i>Server Side Programming Is Cool</i>");
  const { url } = req;
  if (url === "/") {
    try {
      const home = fs.readFileSync(resolve('resources','pages','home.html'), 'utf-8')
      res.end(home)
    } catch (error) {
      res.writeHead(404, {'content-type': 'text/html'} )
      res.end('<h1>Server Not Found</h1>')
    }
  }
  else if (url === "/style.css") {
    try {
      const home = fs.readFileSync(resolve('resources','CSS','style.css'), 'utf-8')
      res.end(home)
    } catch (error) {
      res.writeHead(404, {'content-type': 'text/css'} )
      res.end('<h1>Server Not Found</h1>')
    }
  }
  else if (url == "/about") {
    try {
      const abt = fs.readFileSync(resolve('resources','pages','about.html'))
      res.end(abt)
    } catch (error) {
      res.writeHead(404,"Error", {'content-type':'text/html'})
      res.end("Server not found")
    }
  }
  else if (url == "/contact") {
    try {
      const cont = fs.readFileSync(resolve('resources','pages','contact.html'));
      res.end(cont)
    } catch (error) {
      res.writeHead(500, "Error, Page not Found", {'content-type':'text/html'})
    }
    res.end('Error')
  }
  else {
    res.writeHead(404, {'content-type': 'text/html'})
    res.end('<h1>Page not Found</h1>')}
});
server.listen(3000, () => {
  console.log("server listening on port 3000");
});
// console.log(http)
