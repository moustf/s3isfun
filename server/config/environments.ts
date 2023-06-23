import dotenv from 'dotenv';

dotenv.config();

export const {
  ACCESS_KEY_ID: accessKeyId,
  SECRET_ACCESS_KEY: secretAccessKey,
} = process.env;
