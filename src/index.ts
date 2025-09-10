import express from "express";
const app = express();
const port = 3000;

app.use('/', (req, res) => {
    res.send('Benvenuto sul mio server scritto in TypeScript!');
});

app.listen(port, () => {
    console.log('Server in ascolto!');
});