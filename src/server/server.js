import express from 'express';
import path from 'path';
import config from 'config';

import logger from './logger';

const app = express();

const serverConfig = config.get('server');

app.use(express.static(path.join('./', 'dist')));

app.get('/api', (req, res) => {
  res.send({ api: 'test'});
});

app.get('*', (req, res) => {
  res.sendFile(path.join('./', 'dist', 'index.html'))
});


app.listen(serverConfig.port, ()=> {
  logger.info(`server starting -> [port] ${serverConfig.port} [env] ${process.env.NODE_ENV}`)
});
