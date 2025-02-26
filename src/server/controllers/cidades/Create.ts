import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares/validation";

interface ICidade {
    nome: string,
    estado: string
}
interface IFilter {
    filter?: string
}


// middleware de validação de dados

export const createValidation = validation((getSchema) => ({
    body: getSchema<ICidade>(yup.object().shape({
        nome: yup.string().required().min(3),
        estado: yup.string().required()
    })),
    query: getSchema<IFilter>(yup.object().shape({
        filter: yup.string().min(3)
    }))
}))


export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    console.log(req.body.nome);
    res.send('Criado!');
    
}