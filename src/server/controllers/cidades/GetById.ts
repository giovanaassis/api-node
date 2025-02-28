import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middlewares/validation";
import { StatusCodes } from "http-status-codes";

interface IParamsProps {
    id?: number
}

// middleware de validação de dados
export const getByIdlValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().required().integer().moreThan(0)
    }))
}))


export const getById = async (req: Request<IParamsProps>, res: Response) => {
    console.log(req.params);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado.');
}