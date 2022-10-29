import express from 'express';
import { createServer } from 'http';
import { DATABASE_URL, PORT } from './configs/environments';
import { db_connect } from './configs/mongo';

const startServer = async () => {
  try {
    const app = express();
    const server = createServer(app);

    await db_connect(DATABASE_URL);

    server.listen(PORT, () => {
      console.info('App listening on port:', PORT);
    });
  } catch (e) {
    const error = e as Error;
    console.error(error.name, error.message);
  }
};

startServer();
