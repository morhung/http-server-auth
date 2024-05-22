#!/usr/bin/env node

const express = require('express');
const path = require('path');
const auth = require('basic-auth');
const { program } = require('commander');

program
  .name('http-server-auth')
  .description('A simple HTTP server with Basic Authentication')
  .version('1.0.0')
  .option('-u, --username <username>', 'username for basic auth', 'admin')
  .option('-p, --password <password>', 'password for basic auth', 'password')
  .option('-P, --port <port>', 'port to run the server on', 3000)
  .option('--path <path>', 'path to static page', './')
  .on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('  $ http-server-auth --username admin --password secret --port 3000 --path ./');
  });

program.parse(process.argv);

const options = program.opts();
const app = express();

const basicAuth = (req, res, next) => {
  const user = auth(req);

  if (user && user.name === options.username && user.pass === options.password) {
    console.log(options.path);
    return next();
  }

  res.set('WWW-Authenticate', 'Basic realm="example"');
  return res.status(401).send('Authentication required.');
};

app.use(basicAuth);
app.use(express.static(path.resolve(options.path)));

const PORT = options.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
