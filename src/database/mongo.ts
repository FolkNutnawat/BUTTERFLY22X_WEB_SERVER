import mongoose from 'mongoose';

export const db_connect = async (DB_URL: string) => {
  await mongoose.connect(DB_URL);
  console.info('MongoDB connection has been established.');
};
