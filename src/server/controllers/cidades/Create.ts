import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middlewares/validation";
import { StatusCodes } from "http-status-codes";
import { ICidade } from "../../database/models";
import { CidadesProvider } from "../../database/providers/cidades";


interface IBodyProps extends Omit<ICidade, 'id'> {}

// middleware de validação de dados
export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3).max(150)
    })),
}))


export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

    const result = await CidadesProvider.create(req.body);

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    }

    res.status(StatusCodes.CREATED).json(result);    
}