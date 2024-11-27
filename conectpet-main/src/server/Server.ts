import express from 'express';
import 'dotenv/config';

import './shared/services/TranslationsYup';

import { router } from './routes';
import cors from 'cors';

const server = express();

server.use(cors());
server.use(express.json());

server.use(router);


export { server };