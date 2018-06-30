const express = require('express');
const path = require('path');
const app = express();

const ClientStatsPath = path.join(__dirname, '../build/stats.json');
const ServerRendererPath = path.join(__dirname, '../build/server.js');
const ServerRenderer = require(ServerRendererPath).default;
const Stats = require(ClientStatsPath);

const portno=3002;

app.use(ServerRenderer(Stats));

app.listen(portno);
console.log(`\n\nListening at http://localhost:${portno}`);