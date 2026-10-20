// Vercel Serverless Function Entry Point for Nile Ecosystem API
// Forwards all incoming serverless requests to the Express backend app

const app = require('../backend/src/server.js');

module.exports = app;
