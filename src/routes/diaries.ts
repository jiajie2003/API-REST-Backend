import express  from "express";

const router = express.Router();

router.get('/', (_req,res) => {
    res.send('Mostrar datos')
});

router.post('/', (_req,res) =>{
    res.send('Guardando datos')
});

export default router;

