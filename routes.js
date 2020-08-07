const fs = require('fs');

function requestHandler(request, response) {
  // console.log(request.url, request.method, request.headers);
  /**
   * Request has metadatas
   * headers 
   */
  // process.exit(); //End the process
  const url = request.url;
  const method = request.method;
  if (url == '/') {
    response.write('<html>')
    response.write('<head><title>Enter Message</title></head>')
    response.write('<body><form action="/message" method="POST"><input name="message" type="text" /><button type="submit">Send</button></form></body>')
    response.write('</html>')
    return response.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    request.on('data', function onListenerData(chunk) {
      console.log(chunk);
      //Defining a function to be executed for every incoming data piece
      body.push(chunk);
    });
    return request.on('end', function onListenerEnd() {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      //Log = message=(input text)
      const message = parsedBody.split("=")[1];
      //message = (input text)
      fs.writeFile('message.txt', message, function writeFileError(err) {
        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
      });
    });
  }
  response.setHeader('Content-Type', 'text/html');
  response.write('<html>')
  response.write('<head><title>First Page</title></head>')
  response.write('<body><h1>Hello World</h1></body>')
  response.write('</html>')
  response.end();
}

module.exports = requestHandler;