import express from "express";
const app = express();
const port = 3000;

import posts from './data/posts';

import postsRouter from './routers/postsRouter';

app.use(express.static('public'));
app.use(express.json());

app.use('/bacheca', postsRouter);

app.get('/', (req, res) => {
    res.send('Benvenuto sul mio server scritto in TypeScript!');
});

app.listen(port, () => {
    console.log('Server in ascolto!');
});