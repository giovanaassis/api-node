import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middlewares/validation";
import { StatusCodes } from "http-status-codes";

interface IParamsProps {
    id?: number
}

interface IBodyProps {
    nome: string
}

// middleware de validação de dados
export const updateByIdValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3)
    })),
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().required().integer().moreThan(0)
    }))
}))


export const updateById = async (req: Request<IParamsProps, {}, IBodyProps>, res: Response) => {
    console.log(req.body)
    console.log(req.params);
    
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado.');
}