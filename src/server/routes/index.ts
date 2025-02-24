import { StatusCodes } from "http-status-codes";
import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Testando de novo.');
})

router.post('/', (req, res) => {
    console.log(req.query.teste)

    res.status(StatusCodes.CREATED).json(req.body);
})

export { router };