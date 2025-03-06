import { StatusCodes } from "http-status-codes";
import { Router } from "express";

import { CidadesControllers } from "../controllers";

const router = Router();

router.get('/', (req, res) => {
    res.send('Olá, mundo!');
})

// rotas para cidades
router.get('/cidades', CidadesControllers.getAllValidation,CidadesControllers.getAll)
router.get('/cidades/:id', CidadesControllers.getByIdlValidation,CidadesControllers.getById)
router.post('/cidades', CidadesControllers.createValidation, CidadesControllers.create);
router.put('/cidades/:id', CidadesControllers.updateByIdValidation, CidadesControllers.updateById);
router.delete('/cidades/:id', CidadesControllers.deleteByIdValidation, CidadesControllers.deleteById);

// rotas para pessoas


export { router };