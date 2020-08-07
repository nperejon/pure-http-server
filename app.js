//Create Server in NodeJS
const http = require('http');
const routes = require('./routes');
//Function requests
const server = http.createServer(routes);

//Adress Server
server.listen(3000)