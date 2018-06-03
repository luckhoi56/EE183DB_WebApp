var WebSocket = require('ws')
const wss = new WebSocket.Server({host:'0.0.0.0',port:8182});
const BeaconScanner = require('node-beacon-scanner');
const scanner = new BeaconScanner();

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
	scanner.onadvertisement = (ad) => {
  	//ws.send(JSON.stringify(ad, null, '  '));
	ws.send(JSON.stringify(ad));
};
});
// Set an Event handler for becons


// Start scanning
scanner.startScan().then(() => {
  console.log('Started to scan.')  ;
}).catch((error) => {
  console.error(error);
});
