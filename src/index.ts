import express from "express";
const app = express();
const port = 3000;

import { notFound } from "./middlewares/notFound";
import { errorsHandler } from "./middlewares/errorsHandler";

import postsRouter from './routers/postsRouter';

app.use(express.static('public'));
app.use(express.json());

app.use('/bacheca', postsRouter);

app.get('/', (req, res) => {
    res.send('Benvenuto sul mio server scritto in TypeScript!');
});

app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
    console.log('Server in ascolto!');
});