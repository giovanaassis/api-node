import { StatusCodes } from "http-status-codes";
import { Router } from "express";

import { CidadesControllers, PessoasControllers } from "../controllers";

const router = Router();

router.get('/', (req, res) => {
    res.send('Olá, mundo!');
})

// rotas para cidades
router.get('/cidades', CidadesControllers.getAllValidation,CidadesControllers.getAll)
router.get('/cidades/:id', CidadesControllers.getByIdValidation,CidadesControllers.getById)
router.post('/cidades', CidadesControllers.createValidation, CidadesControllers.create);
router.put('/cidades/:id', CidadesControllers.updateByIdValidation, CidadesControllers.updateById);
router.delete('/cidades/:id', CidadesControllers.deleteByIdValidation, CidadesControllers.deleteById);

// rotas para pessoas
router.get('/pessoas', PessoasControllers.getAllValidation,PessoasControllers.getAll)
router.get('/pessoas/:id', PessoasControllers.getByIdValidation,PessoasControllers.getById)
router.post('/pessoas', PessoasControllers.createValidation, PessoasControllers.create);
router.put('/pessoas/:id', PessoasControllers.updateByIdValidation, PessoasControllers.updateById);
router.delete('/pessoas/:id', PessoasControllers.deleteByIdValidation, PessoasControllers.deleteById);

export { router };