# node-the-right-way
Examples from Node.js the Right Way

## Getting 0MQ Running on Ubuntu
Using instructions from [here](http://zeromq.org/intro:get-the-software), but configure failed looking for libsodium.

Installed libsodium using instructions from [here](https://tuananh.org/2015/06/16/how-to-install-zeromq-on-ubuntu/).

## Getting 0MQ Running on Mac OS X
Instructions in the book were mostly correct, but npm install zmq initially failed. The solution is to install pkg-config, e.g. 'brew install pkg-config'

Found that fix [here](http://stackoverflow.com/questions/24294525/error-installing-zmq-node-module).
