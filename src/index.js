import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import endpoints from './endpoints.js';

const server = express();
server.use(cors());
//Para que a API possa começar a receber parâmetros de corpo é necessário:
server.use(express.json());

server.use(endpoints);


server.listen(process.env.PORT,
                        () => console.log(`API na porta ${process.env.PORT}`));