var net = require('net');

async function doserver()
{
    var server = net.createServer(function(socket) {
	          socket.write('Echo server\r\n');
	          socket.pipe(socket);
                  });

}




server.listen(1337, '127.0.0.1');

/*
And connect with a tcp client from the command line using netcat, the *nix 
utility for reading and writing across tcp/udp network connections.  I've only 
used it for debugging myself.
$ netcat 127.0.0.1 1337
You should see:
> Echo server
*/


