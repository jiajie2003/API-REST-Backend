import express from 'express';
import diaryRouter from './routes/diaries';

const app = express();
app.use(express.json());

const PORT = 3001;

app.get('/funciona', (_req,res) => {
    console.log('Funciona bien');
    res.send('Funciona bien');
})

app.use('/datos', diaryRouter);

app.listen(PORT, () => {
    console.log(`Escucha en el puerto ${PORT}`);
}) 