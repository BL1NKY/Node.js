var http = require('http');
var seite = getFile('Seite.html');

var server = http.createServer(function(request, response) {
  console.log('REQUEST!!!');
  response.write('Hi!');
  response.end();
});
server.listen(3001);
