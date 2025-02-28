import { StatusCodes } from "http-status-codes";
import { Router } from "express";

import { CidadesControllers } from "../controllers";

const router = Router();

router.get('/', (req, res) => {
    res.send('Olá, mundo!');
})

router.get('/cidades', 
    CidadesControllers.getAllValidation,
    CidadesControllers.getAll
)

router.post(
    '/cidades', 
    CidadesControllers.createValidation, 
    CidadesControllers.create
);

export { router };