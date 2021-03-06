"use strict";

const
    zmq = require('zmq'),
    filename = process.argv[2],

    requester = zmq.socket('req');

// handle replies from responder
requester.on("message", function(data) {
    let response = JSON.parse(data);
    console.log("Received response: ", response);
});

requester.connect("tcp://localhost:5433");

// send request for content
for (let i=1; i<=3; i++) {
    console.log('Sending request for ' + filename);
    requester.send(JSON.stringify({
        path: filename
    }));
}

console.log('End of the universe.');
