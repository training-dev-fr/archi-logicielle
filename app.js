const http = require('http');
const fs = require('fs');
const route = require('./route.js');

const server = http.createServer();

server.on('listening', () => {
    console.log("Serveur en écoute sur le port 3000");
});

route(server);

server.listen(3000);