var http = require('http');

//creando server minimo
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1> Hello World con HTML </h1>");
    res.end();
}).listen(3000, function() {
    console.log("servidor escuchando puerto 3000")
});