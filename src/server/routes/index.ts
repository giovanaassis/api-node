import { StatusCodes } from "http-status-codes";
import { Router } from "express";

import { CidadesControllers } from "../controllers";

const router = Router();

router.get('/', (req, res) => {
    res.send('Olá, mundo!');
})

router.post('/cidades', CidadesControllers.createBodyValidator, CidadesControllers.create);

export { router };