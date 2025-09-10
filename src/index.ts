import express from "express";
const app = express();
const port = 3000;

import { posts } from './data/posts';

app.use(express.static('public'));

app.use('/bacheca', (req, res) => {
    res.json(posts);
})

app.use('/', (req, res) => {
    res.send('Benvenuto sul mio server scritto in TypeScript!');
});

app.listen(port, () => {
    console.log('Server in ascolto!');
});