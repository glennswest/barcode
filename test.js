net = require('net');


//^XA^FO100,100^BQN,2,10^FDYourTextHere^FS^XZ
//barcode = "^XA^LH380^BQN,2,10^FDFARRIS^FS^XZ"
barcode = "^XA^LH390^BY3^B3N100,N,N,N^FDS2699711I^FS^XZ"
//barcode = "^XA^LH400,30^FO20,10^ADN,90,50^AD^FDThe quick brown fox is really big guy and maybe we can know about the rabit too^FS^XZ"

var client = new net.Socket();
client.connect(6101, 'zebra', function() {
	console.log('Connected');
	client.write(barcode);
});




