"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3001;
app.get('/funciona', (_req, res) => {
    console.log('Funciona bien');
    res.send('Funciona bien');
});
app.listen(PORT, () => {
    console.log(`Escucha en el puerto ${PORT}`);
});
