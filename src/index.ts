import { PORT } from 'configs/environmensts';
import express from 'express';
import { createServer } from 'http';

const startServer = async () => {
  const app = express();
  const server = createServer(app);

  server.listen(PORT, () => {
    console.info('App listening on port:', PORT);
  });
};

startServer();
