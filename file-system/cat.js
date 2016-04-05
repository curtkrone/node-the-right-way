#!/usr/local/bin/node --harmony

// NOTE: the book uses this line, but my node is not in /usr/bin
// #!/usr/bin/env node --harmony

require('fs').createReadStream(process.argv[2]).pipe(process.stdout);
