const { Server } = require('@webserverless/fc-express');
const getRawBody = require('raw-body');
const { app, server } = require('./server');

const proxyServer = new Server(server);

// http trigger
exports.handler = async (req, res, context) => {
  req.body = await getRawBody(req);
  await app.prepare();
  proxyServer.httpProxy(req, res, context);
};
