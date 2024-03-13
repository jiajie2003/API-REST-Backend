import express from 'express';

const app = express();
app.use(express.json());

const PORT = 3001;

app.get('/funciona', (_req,res) => {
    console.log('Funciona bien');
    res.send('Funciona bien');
})

app.listen(PORT, () => {
    console.log(`Escucha en el puerto ${PORT}`);
})